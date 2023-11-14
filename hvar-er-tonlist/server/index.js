const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require("./models/users");
const eventModel = require("./models/events");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://4360szymon:hvarertonlist@hvarertonlistcluster.orieewc.mongodb.net/hvarertonlist?retryWrites=true&w=majority", {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
});

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

const Event = mongoose.model('events', eventModel);

// Skra event
app.post("/registerEvent", async (req, resp) => {
  try {
      const event = new Event(req.body);
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
      resp.send("Something Went Wrong");
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});