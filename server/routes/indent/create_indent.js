const express = require("express");
const router = express.Router();
const Indent=require('../../models/indent/indent')

router.post('/newindent',(req,res)=>{
    var newPost = new Indent({
        requestedBy:req.body.userId,
        
        orderId:req.body.orderId,
        items:req.body.items,
        margin:req.body.margin,

    })
    newPost.save()
    .then(post => {
        res.json(post);
        console.log("save in data base"+Indent);
    })
    .catch(err => res.json(err))
});

module.exports = router;