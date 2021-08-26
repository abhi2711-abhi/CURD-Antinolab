const express = require('express')
const router = express.Router()
const products = require('../models/db')

router.get('/admin/', async(req, res) => {
    try{
            const al = await products.find()
            res.json(al)
    }catch(err){
        res.send('error ' + err)
    }
})

router.get('/user/', async(req, res) => {
    try{
            const al = await products.find()
            res.json(al)
    }catch(err){
        res.send('error ' + err)
    }
})

router.get('/user/:id', async(req, res) => {
    try{
            const al = await products.findById(req.params.id)
            res.json(al)
    }catch(err){
        res.send('error ' + err)
    }
})

router.post('/admin/', async(req,res) => {
    try {
        const addproduct = new products ({
            name : req.body.name,
            price : req.body.price
            
        })

        const a1 = await addproduct.save()
        res.json(a1)

    }catch(error) {
        res.send('error ' + err)
    }
})

router.put('/admin/:id', async(req,res) => {
    try{
        const al = await products.findOneAndUpdate(req.params.id,
            {
                $set:{price:req.body.price}
            })
        const updatedDocument= await products.findById(req.params.id)

        res.send(updatedDocument)
    }catch(err){
        res.send('error ' + err)
    }
})

router.delete('/admin/:id', async(req,res) => {
    try{
        const al = await products.findById(req.params.id)
        const a1 = await al.delete()
        res.send('deleted')
    }catch(err){
        res.send('error ' + err)
    }
})

module.exports = router