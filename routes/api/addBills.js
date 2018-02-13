const router = require("express").Router();
const billController = require("../../controllers/billsController");


router.route("/bills")
  .get(billController.findAll)
  .post(billController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(billController.findById)
  .delete(billController.remove);

  module.exports = router;