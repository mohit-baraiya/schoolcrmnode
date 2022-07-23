const { Router } = require("express");
const facultyController = require("../controllers/facultyController");
// const middleware = require('../configs/middleware');
const passport = require("passport");
const router = Router()
router.post('/', passport.authenticate('jwt'), facultyController.createFaculty);
module.exports = router