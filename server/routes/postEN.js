const express = require('express')
const router = express.Router()
const PostEN = require('../model/postEN')
const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

mongoose.Promise = global.Promise

const uploadPath = path.join('static', PostEN.coverImageBasePath)
const imageMimeTypes = ['image/jpeg', 'image/png']
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, uploadPath)
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})
const upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    callback(null, imageMimeTypes.includes(file.mimetype))
  }
})

router.get('/', async (req, res) => {
  try {
    const postsEn = await PostEN.find()
      .select("_id title content url coverImageName")
    await res.json(postsEn)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/:url', getPostEN, (req, res) => {
  res.json(res.post)
})

async function getPostEN(req, res, next) {
  let post
  try {
    post = await PostEN.findOne({ url: req.params.url })
    if (post === null) {
      return res.status(404).json({message: 'Нет такой страницы'})
    }
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
  res.post = post
  next()
}

router.post('/', upload.single('file'), async (req, res, next) => {
  const fileName = req.file !== null ? req.file : null
  const postEN = new PostEN({
    url: req.body.url,
    title: req.body.title,
    content: req.body.content,
    coverImageName: fileName
  })
  try {
    const newPostEN = postEN.save()
    await res.status(201).json(newPostEN)
  } catch (e) {
    res.status(400).json({message: e.message})
  }
})

router.post('/addFile', upload.single('file'), async (req, res, next) => {
  const newFileName = req.file !== null ? req.file : null
  try {
    await res.json(newFileName)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

module.exports = router

// url: req.body.url,
// 