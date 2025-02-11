const mongoose = require("mongoose");
const db = require("../models");

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/knodeyacode");
// mongoose.connect(process.env.MONGODB_URI || "mongodb://alex:password123@ds253857.mlab.com:53857/heroku_6rw37vks");
mongoose.connect(process.env.MONGODB_URI || "mongodb://hetal:password1@ds161209.mlab.com:61209/heroku_cpp1b5bv");
const scoreSeed = [

{
    userName: "Ash Ketchum",
    email: "americalies2u@aol.com",
    score: 12
},
{
  userName: "Mash Chum",
  email: "america2u@aol.com",
  score: 13
},
{
  userName: "Suzzen Ketchum",
  email: "calies2u@aol.com",
  score: 15
},
{
  userName: "Ashley Ketchum",
  email: "meries2u@aol.com",
  score: 14
},
{
  userName: "David olsen",
  email: "david2u@aol.com",
  score: 14
},
{
  userName: "Mioses Young",
  email: "moses@aol.com",
  score: 14
},
{
  userName: "Rahul Nair",
  email: "rahulN@aol.com",
  score: 14
},
{
  userName: "Ash Ketchum",
  email: "americalies2u@aol.com",
  score: 14
}



    
];

db.Score
  .remove({})
  .then(() => db.Score.collection.insertMany(scoreSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
