 var mongoose = require("mongoose");
 var Schema = mongoose.Schema;

 var BillSchema = new Schema({
     body: {
         type: String
    },
    saved: {
        type: Boolean,
        default: false
    },
     bill: {
         type: Schema.Types.ObjectId,
         ref: "Bill"
     }
 });

var Bill = mongoose.model("Bill", BillSchema);

module.exports = Bill;