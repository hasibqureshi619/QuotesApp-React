const mongoose = require('mongoose');

let QuoteSchema = new mongoose.Schema({
    author:{
        type:String,
        required : [true,'author is required'],
        trim:true  
    },
    text:{
        type:String,
        required : [true,'Quote is required'],
        trim:true
    }
})

let Quotes = mongoose.model('Quotes',QuoteSchema);

module.exports = Quotes;