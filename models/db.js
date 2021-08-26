const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:String
    }
})

const abhi = new mongoose.model('Product',productSchema)
module.exports = abhi