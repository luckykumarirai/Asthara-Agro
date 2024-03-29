const express = require('express');
const router = express.Router();
const Vendor = require('../../../models/user/vendor');

router.put('/update_vendor/:id',(req, res) =>{
    var status = {
        full_name: req.body.full_name,
        email: req.body.email,
        mobile_no: req.body.mobile_no,
        gst_no: req.body.gst_no,
    }
    Vendor.findOneAndUpdate({'_id':req.params.id}, status)
    .then((status) => {
        if(status){
            var message = { message: "venor details updated successfully" };
            res.json(message);
        }else{
            var message = { message: "vendor not found" };
            res.json(message);
        }
    }).catch(err => {
        console.log(err);
        var message = { message:"somthing went wrong!",success: false, err: err };
        res.json(message);
    })
});

module.exports = router;