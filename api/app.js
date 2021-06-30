const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

/**
 * Import moongose models
 */
const { mongoose } = require("./db/mongoose");
const { Position } = require("./db/models/position");

/**
 * Middleware
 */
app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE"
  );
  next();
});

/**
 * Get all positions
 */
app.get("/", (req, res) => {
  Position.find({}).then((pos) => {
    res.send(pos);
  });
});

/**
 * Create new position
 */
app.post("/addPosition", (req, res) => {
  let title = req.body.title;
  let genre = req.body.genre;
  let season = req.body.season;
  let episode = req.body.episode;

  let newPosition = new Position({
    title,
    genre,
    season,
    episode,
  });

  newPosition.save().then((allPositions) => {
    res.send(allPositions);
  });
});

/**
 * Update specified position
 */
app.patch("/position/:id", (req, res) => {
  Position.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  ).then(() => {
    res.sendStatus(200);
    console.log("Updated position");
  });
});

/**
 * Delete specified position
 */

app.delete("/position/:id", (req, res) => {
  Position.findOneAndRemove({
    _id: req.params.id,
  }).then((removedPosition) => {
    res.send(removedPosition);
  });
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
