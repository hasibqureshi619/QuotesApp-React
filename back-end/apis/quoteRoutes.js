//  requiring our model
// const { default: Quote } = require('../../front-end/src/Components/Quote/Quote');
const Quotes = require('../models/Quote');
const router = require('express').Router();

router.get('/allquotes',async (req,res)=>{
    try{
        let allQuotes = await Quotes.find({});
        res.status(200).json(allQuotes)
        // console.log(allQuotes)
    }
    catch(e){
        res.status(400).json({msg:"something went wrong"})
    }
})
router.post('/addquotes',async(req,res)=>{
    let {author,text} = req.body;
    try{
        await Quotes.create({text,author});
        res.status(201).json({msg:"New quote Created successfully"});
    }
    catch(err){
        console.log('err, whilecreate in db');
    }
    })

router.get('/quotes/:id',async (req,res)=>{
    let {id} = req.params;
    const quote = await Quotes.findById(id);
    res.status(200).json(quote);
})
router.delete('/delete/:id',async(req,res)=>{
    await Quotes.deleteOne({_id : req.params.id});
    res.status(200).json({msg:"Deleted successfully"})
})

router.get('/editquotes/:id', async(req,res)=>{
    let {id} = req.params;
    const quoteData = await Quotes.findById(id);
    res.status(201).json(quoteData);

})

module.exports = router;