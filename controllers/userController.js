const db = require("../models");

module.exports = {
  getUsers: function(req, res) {
    db.User.find()
      .then(dbUserdata => res.json(dbUserdata))
      .catch(err => res.status(422).json(err));
  },

  saveUser: function(req, res) {
    db.User.create(req.body)
      .then(dbUserdata => res.status(200).json(dbUserdata))
      .catch(err => {
        // console.log(err);
        res.status(500).json(err);
      });
  },

  findUser: function(req, res) {
    db.User.findOne({ userName: req.params.name })
      .then(dbUserdata => res.json(dbUserdata))
      .catch(err => res.status(422).json(err));
  }
};
