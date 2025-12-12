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


    //const users = await UserModel.findOne({
    //    name: 'Bowen Marsh'
    //});

    /*const newUser = new UserModel({
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
    
    console.log(users)*/
/*
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

    console.log(movies);*/
    //const FindusersById = await UserModel.findById("59b99ddfcfa9a34dcd788608");
    //console.log(FindusersById)

    //users.overwrite({
    //    name: "dev@triptyk.eu",
    //    email: "dev@triptyk.eu"
    //});
    //await users.save();
    //await FindusersById.deleteOne();

    // Exercice
    const newMovies1 = new MovieModel({
        "plot": "Dans une métropole futuriste, une jeune hackeuse découvre un réseau souterrain où les souvenirs peuvent être volés et revendus.",
        "genres": [
            "Thriller",
            "Science Fiction",
            "Action"
        ],
        "runtime": 126,
        "cast": [
            "Maya Lefèvre",
            "Adrien Koller",
            "Sofia Delgado",
            "Kenji Tanaka"
        ],
        "num_mflix_comments": 0,
        "poster": "https://example.com/memoire_interdite_poster.jpg",
        "title": "Mémoire Interdite",
        "fullplot": "Lina, hackeuse de génie, infiltre un marché noir où les souvenirs humains sont extraits et vendus. En découvrant que son propre passé a été manipulé, elle doit affronter une organisation puissante prête à tout pour contrôler la mémoire collective. Entre poursuites haletantes et dilemmes moraux, Lina comprend que protéger ses souvenirs revient à défendre son identité.",
        "languages": [
            "French",
            "English"
        ],
        "released": new Date(),
        "directors": [
            "Julien Moreau"
        ],
        "writers": [
            "Julien Moreau",
            "Amira Benali"
        ],
        "awards": {
            "wins": 1,
            "nominations": 3,
            "text": "Winner of 1 imaginary award, nominated for 3."
        },
        "lastupdated": "2025-12-11 16:15:00.000000000",
        "year": 2025,
        "imdb": {
            "rating": 7.6,
            "votes": 3890,
            "id": 888888
        },
        "countries": [
            "France",
            "Japan"
        ],
        "type": "movie",
        "tomatoes": {
            "viewer": {
                "rating": 3.9,
                "numReviews": 201,
                "meter": 76
            },
            "lastUpdated": {
                "$date": "2025-12-10T19:12:00.000Z"
            }
        }
    });

    const newMovies2 = new MovieModel({
        "plot": "Un groupe d’explorateurs part à la recherche d’une cité engloutie au cœur de l’Atlantique, mais découvre qu’elle est habitée par des gardiens millénaires.",
        "genres": [
            "Adventure",
            "Fantasy",
            "Mystery"
        ],
        "runtime": 140,
        "cast": [
            "Lucien Dubois",
            "Amélia Torres",
            "Noah Becker",
            "Chiara Bianchi"
        ],
        "num_mflix_comments": 0,
        "poster": "https://example.com/cite_atlantide_poster.jpg",
        "title": "La Cité des Profondeurs",
        "fullplot": "Guidés par une carte ancienne, quatre explorateurs plongent dans l’océan Atlantique pour retrouver une cité mythique. Mais au lieu de ruines, ils découvrent une civilisation intacte, protégée par des gardiens mystérieux. Entre alliances fragiles et révélations bouleversantes, ils doivent choisir entre révéler leur découverte au monde ou préserver le secret millénaire.",
        "languages": [
            "French",
            "Italian"
        ],
        "released": new Date(),
        "directors": [
            "Isabelle Fournier"
        ],
        "writers": [
            "Isabelle Fournier",
            "David Klein"
        ],
        "awards": {
            "wins": 2,
            "nominations": 5,
            "text": "Winner of 2 imaginary awards, nominated for 5."
        },
        "lastupdated": "2025-12-11 16:20:00.000000000",
        "year": 2025,
        "imdb": {
            "rating": 8.4,
            "votes": 5120,
            "id": 777777
        },
        "countries": [
            "Italy",
            "France"
        ],
        "type": "movie",
        "tomatoes": {
            "viewer": {
                "rating": 4.5,
                "numReviews": 178,
                "meter": 89
            },
            "lastUpdated": {
                "$date": "2025-12-10T19:30:00.000Z"
            }
        }
    });

    await newMovies1.save();
    await newMovies2.save();

    const getMatrix = await MovieModel.findOne({
        title: 'The Matrix',
    });

    console.log(getMatrix)

    if(getMatrix) {
        getMatrix.title = "The Matrique";
        await getMatrix.save().catch(console.log);  
    }

    

    const deleteJurassic = await MovieModel.findOneAndDelete({
        title: 'Jurassic Park',
    });

    // ou
    const jurassic = await MovieModel.findOne({
        title: 'Jurassic Park',
    });
    
    // del via model
    await jurassic?.deleteOne();
    // del via collection
    await MovieModel.deleteOne({
        title: 'Jurassic Park',
    })
}   


init();