const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//const authRoutes = require('./routes/auth')
const userModel = require("./models/users");
const eventModel = require("./models/events");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://4360szymon:hvarertonlist@hvarertonlistcluster.orieewc.mongodb.net/hvarertonlist?retryWrites=true&w=majority", {
});

//app.use('/auth', authRoutes);

// Fa usera
app.get('/getUsers', (req, res) => {
  userModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err));
});
// Fa events
app.get('/getEvents', (req, res) => {
  eventModel.find()
  .then(events => res.json(events))
  .catch(err => res.json(err))
})

// Skra event
app.post("/registerEvent", async (req, resp) => {
  try {
    const event = new eventModel(req.body);
    let result = await event.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      resp.send(req.body);
      console.log(result);
    } else {
      console.log("Event already register");
    }
  } catch (e) {
    console.error("Error saving event:", e);
    resp.status(500).json({ error: 'Something went wrong' });
  }
});

//Skra user
app.post("/registerUser", async (req, resp) => {
  try {
    const user = new userModel(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      resp.send(req.body);
      console.log(result);
    } else {
      console.log("User already register");
    }
  } catch (e) {
    console.error("Error saving user:", e);
    resp.status(500).json({ error: 'Something went wrong' });
  }
});

// Bæta við eventInterest á user
app.post("/eventInterest/:userId", async (req, resp) => {
  try {
    const userId = req.params.userId;
    const { propertyName, propertyValue } = req.body;

    // Find the user by ID
    const user = await userModel.findById(userId);

    if (!user) {
      return resp.status(404).json({ error: 'User not found' });
    }

    // Add the new property to the user
    user[propertyName] = propertyValue;

    // Save the updated user
    const updatedUser = await user.save();

    // Send the updated user (excluding sensitive information) as the response
    const userWithoutPassword = updatedUser.toObject();
    delete userWithoutPassword.password;
    resp.json(userWithoutPassword);
  } catch (e) {
    console.error("Error adding property to user:", e);
    resp.status(500).json({ error: 'Something went wrong' });
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});