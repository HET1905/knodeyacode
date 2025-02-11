const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/knodeyacode", {
//   useNewUrlParser: true
// });

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://hetal:password1@ds161209.mlab.com:61209/heroku_cpp1b5bv",
  { useNewUrlParser: true }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
// mongodb://<dbuser>:<dbpassword>@ds161209.mlab.com:61209/heroku_cpp1b5bv
