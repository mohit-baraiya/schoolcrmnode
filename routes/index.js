const { Router } = require("express");
const passport = require("passport");
const adminController = require("../controllers/adminController");
require('../configs/middleware')
const router = Router();
router.post("/", adminController.adminLogin);
router.post("/register-admin", adminController.createAdmin);
router.get('/all-faculties', passport.authenticate('jwt'), adminController.allFaculty)
router.get('/all-students', passport.authenticate('jwt'), adminController.allStudents)
router.use('/faculty', require('./faculty'))
router.use('/student', require('./student'))
module.exports = router;
