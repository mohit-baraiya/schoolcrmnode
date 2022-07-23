const express = require("express");
const session = require('express-session')
const app = express();
const port = 5000;
require("./configs/dbConnect");
app.use(session({
    secret: 'secret session',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

session.s
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes/"));

app.listen(port, console.log.bind(null, `server running on port: ${port}`));
