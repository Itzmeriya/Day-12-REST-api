const express = require('express');
const snack = require('../models/snack');
const router = express.Router();
const Snack= require('../models/snack');

//creating a snack
router.post('/',(req,res)=>{
    const snack = new Snack({
        name:req.body.name,
        price:req.body.price,
        type:req.body.type
    });
    snack.save().
    then ((data) =>{
        res.json(data);
    }).catch((err) =>{
        res.json({message:err});
    })
});

//getting all snacks
router.get('/',async(req,res) =>{try
    {
        const snacks = await snack.find();
        res.json(snacks);
    }catch (err){res.json({message:err});
}
});

//getting a snack by id
router.get('/:snackid', async(req,res) =>{try
    {
        const snack = await Snack.findById(req.params.snackid);
        res.json(snack);
    }catch(err){res.json({message:err});
}

});

//deleting a snack
router.delete('/:snackid',async(req,res)=>{try
    {
        const removesnack = await Snack.deleteOne({
           _id : req.params.snackid});
           res.json(removesnack);
        }catch (err){
            res.json({message:err});
        
    }
});

//update a customer by id
router.patch('/:snackid',async(req,res)=>{ try
    {
        const snack = await Snack.findOne({
            _id : req.params.snackid});
            if(req.body.name){
                snack.name= req.body.name;
            }
            if(req.body.price){
                snack.price= req.body.price;
            }
            if (req.body.type){
                snack.type = req.body.type;
            }
            await snack.save();
            res.json(snack);
        }catch(err){
            res.json({message:err});
    }
});


module.exports= router;
