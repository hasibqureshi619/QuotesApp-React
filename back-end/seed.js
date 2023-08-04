const mongoose = require('mongoose');
const Quotes = require('./models/Quote');

let dummyQuotes=[
    {
        author:'Samarth',
        text: 'Syntax Over Semantics'
    },
    {
        author:'Andrew Tate',
        text: 'Devil is Working Harder than You, How do you Expect to Win !'
    },
    {
        author:'Dr. Kalaam',
            text: 'if You Want to Shine Like a Sun, than first burn like a sun'
    }
]

async function seedDB(){
    await Quotes.deleteMany({})
    await Quotes.insertMany(dummyQuotes);
    console.log('DB Seeded')
}

module.exports = seedDB