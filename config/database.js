const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/case2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection done"))
  .catch((err) => console.log("DB connection error" + err));
