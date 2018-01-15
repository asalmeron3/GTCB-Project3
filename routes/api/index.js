const router = require("express").Router();
const userRoutes = require("./addUser");

// User routes
router.use("/user", userRoutes);

module.exports = router;
