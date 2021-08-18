const mongoose = require('mongoose')
const path = require('path')

const coverImageBasePath = 'uploads/posts'

const postKzSchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: true
  },
  content: {
    type: Array,
    required: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  coverImageName: {}
})

postKzSchema.virtual('coverImagePath').get(function() {
  if(this.coverImageName != null) {
    return path.join('/', coverImageBasePath, this.coverImageName)
  }
})

module.exports = mongoose.model('PostKZ', postKzSchema)
module.exports.coverImageBasePath = coverImageBasePath