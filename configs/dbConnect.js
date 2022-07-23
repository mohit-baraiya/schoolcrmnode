const { connect, connection } = require("mongoose");

let url =
  "mongodb+srv://admin:admin123@cluster0.kwzi2.mongodb.net/schoolcrm?retryWrites=true&w=majority";

connect(url);
connection.on("error", console.log.bind(null, "db not connected !!"));
connection.once("open", console.log.bind(null, "db connected successfully !!"));
module.exports = connection;
