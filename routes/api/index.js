const router = require("express").Router();
const userRoutes = require("./addUser");
const authRoutes = require("./auth-routes");
const billRoutes = require("./addBills");

// User routes
router.use("/user", userRoutes);
router.use("/auth",authRoutes);
router.use("/bill",billRoutes);
module.exports = router;
