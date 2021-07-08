const express = require("express");
const router = express.Router();
const Indent=require('../../models/indent/indent')

router.put('/updateindent/:id',(req, res) =>{ 
    var newupdate = {
        userId:req.params.userId,
        customerId:req.params.customerId,
        requestedBy:req.params.empId,
        remark:req.body.remark,
        item_description:req.body.item_description,
        status:req.body.status,
    }
    Indent.findOneAndUpdate({'_id':req.params.id},newupdate)
    .then((indent) => {
        if(indent){
            var message = { success: "sucessfully updated" };
            res.json(message);
        }else{
            var message = { error: "Indent not found" };
            res.json(message);
        }
    }).catch(err => {
        console.log(err);
        var message = { success: false, err: err };
        res.json(message);
    })
});

module.exports = router;