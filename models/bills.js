var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BillSchema = new Schema({
    body: {
        type: String
    },
    bill: {
        type: Schema.Types.ObjectId,
        ref: "Bill"
    }
});

var Bill = mongoose.model("Bill", NoteSchema);

module.exports = Bill;