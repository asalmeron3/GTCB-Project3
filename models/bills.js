 var mongoose = require("mongoose");
 var Schema = mongoose.Schema;

 var BillSchema = new Schema({
     billDescription: {
         type: String
    },
     billTitle: {
         type: Schema.Types.ObjectId,
         ref: "Bill"
     }
 });

var Bill = mongoose.model("Bill", BillSchema);

module.exports = Bill;