const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Question.find()
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByTopic: function(req, res) {
    // console.log(req.params.topic)
    let topics = [];
    topics.push(req.params.topic.split(","));
    // console.log(topics);
    db.Question.find({ topic: { $in: topics[0] } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
