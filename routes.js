const express = require("express");
const router = express.Router();
const userController = require("./controllers/user.controller");

router.get("", userController.getUser);
router.post("", userController.signUp);
// router.put("/parking/:id", parkingController.updateDepartureTime);

module.exports = router;
