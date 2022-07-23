const { Router } = require("express");
const middleware = require("../configs/middleware");
const adminController = require("../controllers/adminController");

const router = Router();
router.post("/", adminController.adminLogin);
router.post("/register-admin", adminController.createAdmin);
router.get("/all-data", middleware.adminVerifiction,adminController.createAdmin);

module.exports = router;
