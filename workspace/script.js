let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
// USE technocite
db = db.getSiblingDB('technocite');

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

students = db.students.find({
    "notes.geography": {
        $eq:5
    }
})

console.log(students)