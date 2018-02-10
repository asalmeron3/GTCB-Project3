const router = require("express").Router();
const billController = require("../../controllers/billsController");


router.route("/")
  .get(billController.findAll)
  .post(billController.create);

// Matches with "/api/bill/:id"
router
  .route("/:id")
  .get(billController.findById)
  .delete(billController.remove);

  module.exports = router;