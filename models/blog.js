const mongoose = require('mongoose')
const blogSchema = new mongoose.Schema({
       title: String,
       body: String,
       image: String,
       datePosted: String,
       address: String,
       authorName: String,
       comments: [{
              name: String,
              message: String
       }]
})
const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog;