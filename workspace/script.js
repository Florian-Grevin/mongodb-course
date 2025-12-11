const { title } = require("process");

let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
// USE technocite
//db = db.getSiblingDB('technocite');

// INSERT INTO students (name) VALUES ("Patrick Sébastien")
/*const inserted = db.students.insertOne({
    name: "Patrick Sébastien"
});

console.log(inserted);

const multiInsert = db.students.insertMany([
  	{
      name:"Fred"
    },
    {
      name:"Sammy"
    }
]);

printjson(multiInsert);

const insertFormator = db.formators.insertOne({
    name: "AmauryD"
});

console.log(insertFormator);

const students = db.students.find({
    name: "Fred"
});

console.log(students);*/
/*
const students = db.students.find({
    name: {
        $eq: "Fred"
    }
});
console.log(students);
*/
/*
const students = db.students.find({
    name: {
        $ne: "Fred",
        $eq: "Sammy"
    }
});
console.log(students);
*/

/*
db.students.insertOne({
    name: "Gérard",
    notes : {
        geography: 5
    }
})*/

/*students = db.students.find({
    "notes.geography": {
        $eq:5
    }
})

console.log(students)*/

/*db.students.insertOne({
    name: "Thibaut",
    notes : {
        geography: 1
    }
})*/
/*
students = db.students.find({
    "notes.geography": {
        $in: [1,2]
    }
})

console.log(students)*/

//db = db.getSiblingDB('sample_mflix');
/*
const movies = db.movies.find({
    genres: {
        $all: ["Romance", "War"]
    }
});

console.log(movies);*/

/*const movies = db.movies.find({
    genres: {
        $type: 4
    }
});*/

// SELECT tilte FROM movies WHERE released IS NULL
//const movies = db.movies
/*.find({
    released: {
        $exists: false
    }
})
.projection({
    title: true,
    year: true,
    _id: false
})
.sort({
    year: -1
})
.limit(5)
.count();*/
/*
.find({
    $or: 
    [
        {
            $and: [
                {
                    year: 2025
                },
                {
                    title: "Jurassic Park"
                }
            ]
        },
        {
            year: 2020
        }
    ]
})
.projection({
    title: true,
    year: true,
    _id: false
})
.sort({
    year: -1
})
.limit(5)

console.log(movies);
*/
/*
//Exos
db = db.getSiblingDB('sample_mflix');
const keanu = db.movies
.find({
    cast: "Keanu Reeves"
})
.projection({
    title: true,
    cast: true,
    _id: false
})
//console.log(keanu);

const comedies = db.movies
.find({
    genres: {
        $in: ["Comedy"]
    }
})
.projection({
    title: true,
    _id: false
})
//console.log(comedies);

const year_2002_2008 = db.movies
.find({
    year: {
        $gte: 2002,
        $lte: 2008
    }
})
.projection({
    title: true,
    year: true,
    _id: false
})
//console.log(year_2002_2008);

const chris_and_matt = db.movies
.find({
    cast: {
        $all: ['Chris O\'Donnell, Matt Damon']
    }
})
.projection({
    title: true,
    _id: false
})
//console.log(chris_and_matt);

const neil_or_brad = db.movies
.find({
    directors: {
        $in: ['Neil Burger', 'Brad Furman']
    }

//    $or: [
//        {
//            directors: "Neil Burger"
//        },
//        {
//            directors: "Brad Furman"
//        }
//    ]
})
.projection({
    title: true,
    _id: false
})
//console.log(neil_or_brad);


const oldest_film = db.movies
.find({
    year: {
        $exists: true
    }
})
.sort({
    year: 1
})
.limit(1)
//console.log(oldest_film);

const critics_notes = db.movies
.find({
    "imdb.rating": { $gt: 8.0 },
    "tomatoes.critic.rating": { $gt: 8.0 }
})
.projection({
    title: true,
    imbd: true,
    critic: true,
    _id: false
})
//console.log(critics_notes);

const unreleased_movies = db.movies
.find({
    released: {
        $exists: false
    }
})
.projection({
    title: true,
    year: true,
    _id: false
})

//console.log(unreleased_movies);
*/
/*
db = db.getSiblingDB('technocite');

const students = db.students.find();

//console.log(students);

const premierEtudiantId = students.toArray()[0]._id;

//UPDATE students SET courses = ["Java", "C#", "MySQL"]
const updateResult = db.students.updateOne({
    _id : premierEtudiantId
}, {
    $set: {
        courses: ["Java", "C#", "MySQL"]
    }
});

//console.log(updateResult);

const sammyToScooby = db.students.updateMany({
    name: 'Sammy'
}, {
    $set: {
        name: 'Scooby'
    }
});*/

//db = db.getSiblingDB('sample_mflix');

/*console.log(db.movies.find({
    _id: ObjectId('573a1399f29313caabcedc5d')
}))*/

// db.movies.updateOne({
//     _id: ObjectId('573a1399f29313caabcedc5d')
// }, {
//     $set: { genres: ["Drama", "Comedy"] },
//     $unset: { title : '' },
//     $rename: { rank : 'ranking' },
//     $inc: { year : 3 }
// })

//const Amaury = db.movies.find({
//    actors: "Amaury Reeves"
//})
//
//console.log(Amaury);

/*const upsertResult = db.movies.updateOne({
    year: -999
}, {
    $set: {
        title: "Jurassic Pâques"
    }
}, {
    upsert: true
})

console.log(upsertResult)*/
/*
const movie = db.movies.find({
    _id: ObjectId('693989c8fc9808bd93c1dd8f'),
})

console.log(movie);

const replaced = db.movies.replaceOne({
    _id: ObjectId('693989c8fc9808bd93c1dd8f'),
}, {
    title : "Trump in Belgium",
    genres: ["Comedy"],
    year: 2026
})

const trumpInBelgium = db.movies.find({
    _id: ObjectId('693989c8fc9808bd93c1dd8f'),
})

console.log(trumpInBelgium);*/
/*
// Exercice 
db = db.getSiblingDB('sample_mflix');

const increase_by_5_imbd_theron = db.movies.updateMany({
    cast: "Charlize Theron"
}, {
        $inc: {
            "imdb.rating": 5 
        }
});
console.log(increase_by_5_imbd_theron);

const eliminate_zwart = db.movies.deleteMany({
    directors: "Harald Zwart"
});
console.log(eliminate_zwart);

const addAuthorKeyKey = db.movies.updateMany(
    {
        title: {
            $in: ["+1", "Anamorph"]
        }
    },{
        $push: {
            cast: "Key Key"
        }
    }
)
console.log(addAuthorKeyKey);

const removeKeanuFromMatrix = db.movies.updateOne(
    {
    title: 'Matrix'
    },
    {
        pull: {
            cast: 'Keanu Reeves'
        }
    }
)
console.log(removeKeanuFromMatrix);

const replaceJurassicByMatrix = db.movies.findOne(
    { 
        title: "Jurassic Park" 
    },
);

delete replaceJurassicByMatrix._id;

const updateJurassic = db.movies.replaceOne({
    title: "Matrix"
}, replaceJurassicByMatrix)

console.log(updateJurassic);*/

//db = db.getSiblingDB('sample_analytics');

/** Structure
 *       {
        date: ISODate('2009-09-23T00:00:00.000Z'),
        amount: 3548,
        transaction_code: 'buy',
        symbol: 'adbe',
        price: '33.07523268054332987730958848260343074798583984375',
        total: '117350.9255505677344046944199'
      }
 */
db = db.getSiblingDB('sample_mflix');
const result = db.movies.aggregate([
    {
        $match: {
            genres: 'Comedy'
        }
    },
//    {
//        $group: {
//            _id: "$account_id",
//            somme: {
//                $sum: "$total"
//            }
//        }
//    }
    {
        $unwind: "$genres"
    },

    {
        $project: {
            genres: 1,
            title: 1
        }
    }
])

//console.log(result);

const aggregation = db.movies.aggregate([
    {
        $match: {
            year: {
                $gte: 2010
        }
        }
    },
    {
        $count: "$total_count"
    }
])

//console.log(aggregation);

//Exercice
const lameDirectors = db.movies.aggregate([
    {
        $match: {
            "imdb.rating": {$lt: 5}
        }
    },
    {
        $project: {directors : 1}
    },
    {
        $limit:10
    },
    {
        $out: {
            db: 'sample_mflix',
            coll: 'lame_directors'
        }
    }
])
console.log(lameDirectors);