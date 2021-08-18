const mongoose = require('mongoose')
const path = require('path')

const coverImageBasePath = 'uploads/posts'

const postRuSchema = new mongoose.Schema({
  
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

postRuSchema.virtual('coverImagePath').get(function() {
  if(this.coverImageName != null) {
    return path.join('/', coverImageBasePath, this.coverImageName)
  }
})

module.exports = mongoose.model('PostRU', postRuSchema)
module.exports.coverImageBasePath = coverImageBasePath