const router = require("express").Router();
const userRoutes = require("./addUser");
const authRoutes = require("./auth-routes");

// User routes
router.use("/user", userRoutes);
router.use("/auth",authRoutes)
module.exports = router;
