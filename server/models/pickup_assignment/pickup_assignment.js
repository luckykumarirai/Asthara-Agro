const mongoose = require('mongoose');
require('@mongoosejs/double');
const pickup_assignmentSchema = new mongoose.Schema({
    pickup_assign_date:{
        type:Date,
        default: Date.now,
    },
    puchase_order_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'PuchaseOrder'
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }, 
    vendor_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Vendor'
    },
    item_description:[{
        itemId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item',
        },
        quantity:{
            type:Number,
            default:0,
        },
        unit_of_measurement:{
            type:String,
        },
        price:{
            type: mongoose.Schema.Types.Double,
            required:true,
        },
    }],
    address_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Address'
    },
    address_location:{
        type:String,
    },
    status: {
        type: String,
        default:"pending",
    },
},
{
    timestamps: true
}
);

const Pickup_assignment = mongoose.model('Pickup_assignment', pickup_assignmentSchema);
module.exports = Pickup_assignment;
