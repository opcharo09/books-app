require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api-routes")
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//  API routes 
require("./routes/api-routes")(app);


mongoose.connect(process.env.MONGODB_URI ||"mongodb://user1:opc1991@ds239936.mlab.com:39936/heroku_2w65rzhq");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
