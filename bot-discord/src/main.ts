import { ActivityType, Client, Events, GatewayIntentBits, Partials, TextChannel } from "discord.js";
import { connect } from "mongoose";
import { TrackingModel } from "./tracker.ts";
import { RappelModel } from "./rappel.ts";
import path from "path";

const connection = await connect("mongodb://root:test123@localhost:27017/bot?authSource=admin");
const ANNONCEMENTS_CHANNEL_ID = "1449047431818772621";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

client.on(Events.MessageReactionAdd, async (reaction, user) => {
  await RappelModel.deleteOne({ userId: user.id });

  if (reaction.message.channel.isTextBased()) {
    await reaction.message.channel.send(
      `Hé hé ${user.username}, ça va me rapporter gros auprès de Miss Finster.`
    );
  }
});


client.on(Events.MessageReactionRemove, (reaction) => {
  console.log("reactionremove", reaction);
});

// Dico illégals
const forbiddenWords = [
  "drogue", "vol", "meurtre", "fraude", "arnaque", "corruption", "viol",
  "escroquerie", "hacking", "terrorisme", "kidnapping", "braquage",
  "cambriolage", "chantage", "extorsion", "racket", "incendie", "vandalisme",
  "piratage", "stupéfiants", "cartel", "mafia", "abus", "harcèlement",
  "prostitution", "pédophilie", "traite", "exploitation", "piraterie",
  "espionnage", "trahison", "blanchiment", "recel", "usurpation",
  "diffamation", "incitation", "violence", "massacre", "génocide", "angular", "machine à café", "Cool ta vie ! :)"
];
const pathGif = "../bot-discord/src/assets/";

client.once(Events.ClientReady, async (c) => {
  c.user.setActivity("Mode Cafteur", { type: ActivityType.Competing });
  c.user.setUsername("Randall");
  c.user.setPresence({ status: "dnd" });
  console.log("Randall est prêt à cafter");

  // Toutes les 5 minutes
  const INTERVAL = 2 * 60; // secondes
  let countdown = INTERVAL;

  setInterval(async () => {
    try {
      const rappels = await RappelModel.find();
      const now = new Date();

      for (const rappel of rappels) {
        if (rappel.date <= now) {
          const channel = await client.channels.fetch(ANNONCEMENTS_CHANNEL_ID);

          // Interval de rappels
if (channel?.isTextBased()) {
  try {
    await (channel as TextChannel).send({
      content: `Vous croyez que vous pouvez m’échapper ? Je vois tout ! ${rappel.text}`,
      files: [path.join(pathGif, "rappel.gif")]
    });

    console.log(`✅ Rappel envoyé (sans ping) pour ${rappel.userId}`);
  } catch (err) {
    console.error(`❌ Impossible d’envoyer le rappel pour ${rappel.userId}`, err);
  }
}


          if (rappel.frequency > 0) {
            rappel.date = new Date(now.getTime() + rappel.frequency * 60 * 1000);
            await rappel.save();
          } else {
            await RappelModel.deleteOne({ _id: rappel._id });
          }
        }
      }
    } catch (err) {
      console.error("Erreur dans le rappel:", err);
    }

    countdown = INTERVAL; // reset après chaque cycle
  }, INTERVAL * 1000);

  // Compte à rebours affiché chaque seconde
  setInterval(() => {
    countdown--;
    console.log(`⏳ Prochain rappel dans ${Math.floor(countdown / 60)}m ${countdown % 60}s`);
  }, 1000);
});

/* Filtre anti */
client.on(Events.MessageCreate, async (message) => {
  const content = message.content.toLowerCase().trim();

  if (message.channelId !== ANNONCEMENTS_CHANNEL_ID) return;
  if (message.author.id === client.user?.id) return;
  if (message.author.bot) return;

  if (forbiddenWords.find(word => content.includes(word))) {
    let tracking = await TrackingModel.findOne({ userId: message.author.id });

    if (tracking) {
      tracking.angularCount += 1;
    } else {
      tracking = new TrackingModel({ userId: message.author.id, angularCount: 1 });
    }

    await tracking.save();

    await message.reply({
      content: `<:report:1449021156400304341> Mademoiselle Finster, j’ai vu <@${message.author.id}> faire quelque chose d’interdit !`,
      files: [path.join(pathGif, "report.gif")]
    });
  } else if (content.includes("randall")) {
    await message.reply({
      content: `<:report:1449021156400304341> Je suis le meilleur espion de la cour !`,
      files: [path.join(pathGif, "randall.gif")]
    });
  }
});

await client.login(process.env.BOT_TOKEN);
