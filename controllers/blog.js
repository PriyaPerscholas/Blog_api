const express = require('express')
const router = express.Router();
const Blog = require('../models/blog')

//index
router.get('/', (req, res) => {
       Blog.find({}, (err, foundblog) => {
              res.json(foundblog)
       })
})
module.exports = router

//create
router.post('/', (req, res) => {
       Blog.create(req.body, (err, createdBlog) => {
              res.json(createdBlog)
       })
})

//update
router.put('/:id', (req, res) => {
       Blog.findByIdAndUpdate(req.params.id, req.body, {
              new: true
       }, (err, updatedBlog) => {
              res.json(updatedBlog)
       })
})

//show
router.get('/:id', (req, res) => {
       Blog.findById(req.params.id, (err, foundblog) => {
              res.json(foundblog)
       })
})

//delete
router.delete('/:id', (req, res) => {
       Blog.findByIdAndDelete(req.params.id, (err, deletedBlog) => {
              res.json(deletedBlog)
       })
})
module.exports = router