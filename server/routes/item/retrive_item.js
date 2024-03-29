const express = require('express');
const router = express.Router();
/* Required Model for store in database*/
const Item = require('../../models/item/item');
//DEfine Route to retrive all items
router.get('/retrive_all_item',(req, res)=>{
    Item.find({}, function(err, items){
        if(err){
            console.log(err);
        }
        else {
            res.json(items);
        }
    });
});
//Define route to retrive item by item id
router.get('/retrive_item/:id',(req, res)=>{
    Item.find({'_id':req.params.id}, function(err, item){
        if(err){
            console.log(err);
        }
        else {
            res.json(item);
        }
    });
});

module.exports = router;