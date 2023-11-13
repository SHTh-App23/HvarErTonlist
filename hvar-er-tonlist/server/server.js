const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require("./models/users");

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

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
