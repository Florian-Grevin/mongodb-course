import mongoose from "mongoose";
import { MovieModel, UserModel } from "./schema.ts";

async function init() {
    try {
        const connection = await mongoose.connect(
            'mongodb://root:test123@localhost:27017/sample_mflix?authSource=admin'
        )
         console.log(
            "Connecté à " + connection.connection.db?.databaseName
        )

    } catch(e) {
        console.log('Une erreur est survenue :', e);
    }

/*
    const users = await UserModel.findOne({
        name: 'Bowen Marsh'
    });

    const newUser = new UserModel({
        name: "Amaury Deflorenne",
        email: "amaury@triptyk.eu",
        password: "mdp",
        daysConnected: 3,
        address: {
            number: 96,
            street: "Cancer Street",
            city: "Cancer City",
            country: 'CancerLand',
            box: '666C',
        }
    });

    await newUser.save();
    
    console.log(users)
*/

    const newMovies = new MovieModel({
        "plot": "Dans une petite ville côtière, un vieil horloger découvre qu’une de ses créations peut arrêter le temps. Les habitants, intrigués et effrayés, doivent décider s’ils veulent vivre éternellement dans un instant figé.",
        "genres": [
            "Science Fiction",
            "Drama",
            "Mystery"
        ],
        "runtime": 112,
        "cast": [
            "Élodie Marchand",
            "Jonas Verbeek",
            "Clara Rossi",
            "Hugo Lambert"
        ],
        "num_mflix_comments": 0,
        "poster": "https://example.com/fauxfilm_poster.jpg",
        "title": "L’Horloger du Temps Suspendu",
        "fullplot": "Émile, un horloger solitaire, fabrique une montre étrange qui arrête le temps lorsqu’on la remonte. Au début, il utilise ce pouvoir pour réparer ses erreurs et revivre des instants heureux. Mais bientôt, la ville entière est piégée dans une boucle temporelle. Les habitants doivent affronter leurs secrets et leurs regrets, tandis qu’Émile réalise que figer le temps ne signifie pas échapper à la vérité.",
        "languages": [
            "French"
        ],
        "released":new Date()
        ,
        "directors": [
            "Sophie Delcourt"
        ],
        "writers": [
            "Marc Delaunay",
            "Sophie Delcourt"
        ],
        "awards": {
            "wins": 0,
            "nominations": 2,
            "text": "Nominated for 2 imaginary awards."
        },
        "lastupdated": "2025-12-11 16:08:00.000000000",
        "year": 2025,
        "imdb": {
            "rating": 8.1,
            "votes": 4521,
            "id": 999999
        },
        "countries": [
            "Belgium",
            "France"
        ],
        "type": "movie",
        "tomatoes": {
            "viewer": {
            "rating": 4.2,
            "numReviews": 134,
            "meter": 82
            },
            "lastUpdated": {
            "$date": "2025-12-10T18:51:24.000Z"
            }
        }
    });

    await newMovies.save();


    const movies = await MovieModel.findOne({
        _id: newMovies.id
    });

    console.log(movies);
}
init();