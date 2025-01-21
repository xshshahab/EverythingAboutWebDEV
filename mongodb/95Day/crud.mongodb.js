// Select the 'CrudDb' database
use("CrudDb");

// Log the current database object to the console
console.log(db);

// Create a new collection called 'crudoperation'
db.createCollection("crudoperation");

// Insert a single document into the 'crudoperation' collection
db.crudoperation.insertOne({
  name: "Crud Operation",
  price: 2000,
  assignments: 2,
  projects: 45,
});

// Insert multiple documents into the 'crudoperation' collection
db.crudoperation.insertMany([
  {
    name: "Crud Operation",
    price: 2000,
    assignments: 2,
    projects: 45,
  },
  {
    name: "Database Management",
    price: 1500,
    assignments: 5,
    projects: 30,
  },
  {
    name: "Web Development",
    price: 3500,
    assignments: 4,
    projects: 60,
  },
  {
    name: "Machine Learning",
    price: 4000,
    assignments: 6,
    projects: 25,
  },
  {
    name: "UI/UX Design",
    price: 3000,
    assignments: 3,
    projects: 40,
  },
  {
    name: "Mobile App Development",
    price: 5000,
    assignments: 8,
    projects: 50,
  },
  {
    name: "Cloud Computing",
    price: 4500,
    assignments: 7,
    projects: 35,
  },
  {
    name: "Cybersecurity",
    price: 3500,
    assignments: 4,
    projects: 55,
  },
  {
    name: "Data Science",
    price: 4800,
    assignments: 9,
    projects: 20,
  },
  {
    name: "AI & Robotics",
    price: 6000,
    assignments: 10,
    projects: 10,
  },
]);

// Find documents with the price equal to 2000 in the 'crudoperation' collection
let a = db.crudoperation.find({ price: 2000 });

// Log the query result (cursor) to the console
console.log(a);

// Get the count of documents returned by the query
console.log(a.count());

// Convert the query result to an array and log it
console.log(a.toArray());

// Find a single document with the price equal to 2000
let b = db.crudoperation.findOne({ price: 2000 });

// Log the found document to the console
console.log(b);

// The following methods, `count()` and `toArray()`, are incorrect in this context
// `findOne` returns a single document, not a cursor, so we cannot call `count()` or `toArray()` on it.
// Therefore, the following lines would result in an error:

// console.log(b.count()); // This will not work because `b` is a single document, not a cursor
// console.log(b.toArray()); // This will not work either because `b` is a single document

// If you want to check for other documents, you should call these methods on the result of `find()`

// ------------------------------
// UPDATE operation
// ------------------------------

// Update a single document with the price 2000 and change the 'assignments' field to 3
db.crudoperation.updateOne({ price: 2000 }, { $set: { assignments: 3 } });

// Update multiple documents with price 3500 and increase the 'projects' by 5
db.crudoperation.updateMany({ price: 3500 }, { $inc: { projects: 5 } });

// ------------------------------
// DELETE operation
// ------------------------------

// Delete a single document with price 4000 (Machine Learning)
db.crudoperation.deleteOne({ price: 4000 });

// Delete all documents where the price is less than 2000
db.crudoperation.deleteMany({ price: { $lt: 2000 } });
