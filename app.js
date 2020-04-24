const express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");

// import routes
const UserRoutes = require("./api/routes/userRoutes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use routes
app.use("/users", UserRoutes);

// db connection
const uri = `mongodb+srv://fahturr:fahturr@clusterkakap-wyppm.gcp.mongodb.net/test?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.Promise = global.Promise;

module.exports = app;
