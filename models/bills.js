 var mongoose = require("mongoose");
 var Schema = mongoose.Schema;

 var BillSchema = new Schema({
     billDescription: {
         type: String
    },
     billTitle: {
         type: String,
         ref: "Bill"
     }
 });

var Bill = mongoose.model("Bill", BillSchema);

module.exports = Bill;