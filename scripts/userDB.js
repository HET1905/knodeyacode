const mongoose = require("mongoose");
const db = require("../models");

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/knodeyacode");
mongoose.connect(process.env.MONGODB_URI || "mongodb://hetal:password1@ds161209.mlab.com:61209/heroku_cpp1b5bv");

const userSeed = [

    {
        userName: "Ash Ketchum",
        email: "americalies2u@aol.com",
        flashcardCSS: false,
        flashcardHTML: false,
        flashcardJS: false
    }

];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
