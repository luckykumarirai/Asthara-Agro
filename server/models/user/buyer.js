const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    full_name: {
        type: String,
        required: true,
    },
    email: { 
        type: String,
        required: true,
         unique: true,
    },
    mobile_no: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    status:{
        type:String,
        default:"",
    }
});

const Buyer = mongoose.model('Buyer', buyerSchema);
module.exports = Buyer;