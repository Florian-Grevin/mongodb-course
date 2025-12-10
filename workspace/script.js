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

db = db.getSiblingDB('sample_mflix');
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
const movies = db.movies
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
.sort({
    year: -1
})
.limit(5)
.count();

console.log(movies);
