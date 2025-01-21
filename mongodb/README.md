# MongoDB: A NoSQL Database

## What is MongoDB?

MongoDB is a **NoSQL** (Not Only SQL) database that is designed for high performance, high availability, and easy scalability. Unlike traditional relational databases like MySQL or PostgreSQL, MongoDB uses a flexible schema that allows the storage of data in a document-oriented format. This means that it stores data in the form of **JSON-like documents**, which are easy to read and write.

## Key Features of MongoDB

- **Document-Oriented**: MongoDB stores data in **documents** (BSON format, a binary representation of JSON), which allows you to store more complex structures such as arrays and nested objects.
- **Scalable**: MongoDB supports horizontal scaling via **sharding**, making it a great choice for large, distributed applications.
- **Flexible Schema**: Documents in MongoDB do not need to follow the same structure, which makes it easy to adapt to changing data models.
- **High Availability**: It provides automatic **replication** via replica sets, ensuring that data is always available even in case of hardware failure.
- **Rich Query Language**: MongoDB has a powerful query language, which allows you to filter, sort, and aggregate data easily.
- **Indexing**: MongoDB supports indexing to improve query performance, including text indexes, geospatial indexes, and hashed indexes.

## MongoDB Data Model

MongoDB uses the following structure to store data:

1. **Database**: A container for collections. A MongoDB instance can contain multiple databases.
2. **Collection**: A group of documents. A collection is the equivalent of a table in relational databases.
3. **Document**: A set of key-value pairs. Each document is a record in MongoDB, similar to a row in SQL.
4. **Field**: A key-value pair within a document. A field is equivalent to a column in SQL.

### Example Document in MongoDB:

```json
{
    "_id": ObjectId("60d5f484c05e0c537ca54753"),
    "name": "John Doe",
    "age": 30,
    "email": "johndoe@example.com",
    "address": {
        "street": "123 Main St",
        "city": "New York",
        "zip": "10001"
    },
    "skills": ["JavaScript", "MongoDB", "Node.js"]
}
```

---

## MongoDB Commands

### **1. Creating a Database**

```bash
use myDatabase
```

This command switches to the `myDatabase` database. If it doesn't exist, MongoDB will create it when data is inserted.

### **2. Creating a Collection**

```bash
db.createCollection("users")
```

Creates a collection named `users`.

### **3. Inserting Documents**

```javascript
db.users.insertOne({
  name: "Jane Doe",
  age: 25,
  email: "janedoe@example.com",
});
```

Inserts a single document into the `users` collection.

```bash
db.users.insertMany([
    {
        "name": "Alice",
        "age": 28,
        "email": "alice@example.com"
    },
    {
        "name": "Bob",
        "age": 35,
        "email": "bob@example.com"
    }
])
```

Inserts multiple documents into the `users` collection.

### **4. Querying Documents**

```javascript
db.users.find({ age: { $gt: 30 } });
```

Finds all users where the age is greater than 30.

```javascript
db.users.findOne({ name: "Jane Doe" });
```

Finds a single document where the name is "Jane Doe".

### **5. Updating Documents**

```javascript
db.users.updateOne({ name: "John Doe" }, { $set: { age: 31 } });
```

Updates the age of the user named "John Doe".

```javascript
db.users.updateMany({ age: { $lt: 30 } }, { $set: { status: "young" } });
```

Updates multiple documents where the age is less than 30 and sets the `status` field to "young".

### **6. Deleting Documents**

```javascript
db.users.deleteOne({ name: "Alice" });
```

Deletes a single document where the name is "Alice".

```javascript
db.users.deleteMany({ age: { $lt: 20 } });
```

Deletes all documents where the age is less than 20.

## Indexing in MongoDB

Indexes improve the performance of queries by allowing MongoDB to quickly locate documents.

### Creating an Index

```bash
db.users.createIndex({ "email": 1 })
```

Creates an ascending index on the `email` field.

### Listing All Indexes

```bash
db.users.getIndexes()
```

Lists all indexes on the `users` collection.

## MongoDB Replica Sets

A `replica set` in MongoDB is a group of MongoDB servers that maintain the same data set, providing redundancy and data availability.

### Initiating a Replica Set

```bash
rs.initiate()
```

Initiates a replica set on the current MongoDB instance.

### MongoDB Sharding

Sharding is the process of distributing data across multiple servers, making MongoDB suitable for large-scale applications.

## Enabling Sharding for a Database

```javascript
sh.enableSharding("myDatabase");
```

Enables sharding for the `myDatabase` database.

### Sharding a Collection

```javascript
sh.shardCollection("myDatabase.users", { age: 1 });
```

Shards the `users` collection on the `age` field.

## MongoDB Aggregation Framework

The aggregation framework allows you to perform complex data processing tasks, such as filtering, grouping, and sorting.

### Example Aggregation

```javascript
db.users.aggregate([
  { $match: { age: { $gt: 30 } } },
  { $group: { _id: "$age", totalUsers: { $sum: 1 } } },
  { $sort: { _id: 1 } },
]);
```

## This query matches users older than 30, groups them by age, and counts the number of users in each group.

## Conclusion

`MongoDB` is a powerful, flexible, and scalable `NoSQL database` that allows developers to store and manipulate data in a way that is better suited for certain types of applications, especially when dealing with large volumes of unstructured or semi-structured data. Its rich query language, indexing capabilities, and ability to scale horizontally make it a popular choice for modern web applications.
