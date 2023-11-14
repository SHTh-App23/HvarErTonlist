const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require("./models/users");
const eventModel = require("./models/events");

const app = express();
app.use(cors());
app.use(express.json());

// Replace 'your-database-name' with your actual database name
mongoose.connect("mongodb+srv://4360szymon:hvarertonlist@hvarertonlistcluster.orieewc.mongodb.net/hvarertonlist?retryWrites=true&w=majority", {
//mongoose.connect("mongodb+srv://4360szymon:hvarertonlist@hvarertonlistcluster.orieewc.mongodb.net/hvarertonlist?retryWrites=true&w=majority", {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
});

app.get('/getUsers', (req, res) => {
  userModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

app.get('/getEvents', (req, res) => {
  eventModel.find()
  .then(events => res.json(events))
  .catch(err => res.json(err))
})

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});/*

// Example server using Express and MongoDB driver
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3001;

const uri = 'mongodb+srv://4360szymon:hvarertonlist@hvarertonlistcluster.orieewc.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/api/data', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('hvarertonlist');
    const collection = database.collection('events');
    const data = await collection.find({}).toArray();
    res.json(data);
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});  
*/