const express = require("express");
const router = express.Router();
const Indent=require('../../models/indent/indent')

router.put('/updateindent/:id',(req, res) =>{ 
    var newupdate = {
        userId:req.params.userId,
        customerId:req.params.customerId,
        requestedBy:req.params.empId,
        remark:req.body.remark,
        items:req.body.items,
        margin:req.body.margin,
        status:req.body.status,
    }
    Indent.findOneAndUpdate({'_id':req.params.id},newupdate)
    .then((item) => {
        if(item){
            var message = {message: "Indent sucessfully updated" };
            res.json(message);
        }else{
            var message = { messageerror: "Record not found" };
            res.json(message);
        }
    }).catch(err => {
        console.log(err);
        var message = { success: false, err: err };
        res.json(message);
    })
});

module.exports = router;