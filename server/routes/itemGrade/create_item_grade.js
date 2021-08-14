const express = require('express');
const router = express.Router();
const ItemGrade = require('../../models/itemGrade/item_grade');

router.post('/create_item_grade', (req, res)=>{
    var newGrade = new ItemGrade({
        grade_name: req.body.grade_name,
    })
    newGrade.save()
    .then(grade => {
        var message={message:"successfully added new grade!",grade:grade};
        res.json(message);
    })
    .catch(err => {
        var message={message:"successfully added new grade!",error:err};
        res.json(message);
    })

        
});

module.exports = router;