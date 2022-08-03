const { Router } = require("express");
const studentController = require("../controllers/studentController");
const passport = require("passport");
const router = Router()
router.post('/', passport.authenticate('jwt'), studentController.createStudent);
router.patch('/update-student/:student_id', passport.authenticate('jwt'), studentController.updateStudent)
module.exports = router