const express = require("express");

const app = express();
const port = 5000;
require("./configs/dbConnect");
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes/"));

app.listen(port, console.log.bind(null, `server running on port: ${port}`));
