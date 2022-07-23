const { Router } = require("express");
const studentController = require("../controllers/studentController");
const passport = require("passport");
const router = Router()
router.post('/', passport.authenticate('jwt'), studentController.createStudent);
module.exports = router