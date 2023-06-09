const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

let db,
  dbConnectionString = process.env.DB_STRING,
  dbName = '',
  collection;

MongoClient.connect(dbConnectionString).then((client) => {
  console.log('Database connection Established');
  db = client.db(dbName);
  collection = db.collection('');
});
