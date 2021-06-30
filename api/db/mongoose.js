// Handle logic to mongoDB

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/watchstatus", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB succesfully");
  })
  .catch((x) => {
    console.log("Error while connecting");
    console.log(e);
  });

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
