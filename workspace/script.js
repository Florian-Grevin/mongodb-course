let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
// USE technocite
db = db.getSiblingDB('technocite');

// INSERT INTO students (name) VALUES ("Patrick Sébastien")
const inserted = db.students.insertOne({
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