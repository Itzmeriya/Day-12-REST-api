const mongoose = require('mongoose');
const snackSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Snack',snackSchema);