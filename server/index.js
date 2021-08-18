const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
const { Nuxt, Builder } = require('nuxt')
const mongoose = require('mongoose')
const app = express()

mongoose.Promise = global.Promise

mongoose.Schema.Types.Boolean.convertToFalse.add('')



const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const postsEnRoutes = require('./routes/postEN')
const postsRuRoutes = require('./routes/postRU')
const postsKzRoutes = require('./routes/postKZ')
app.use('/RealCyprus/posts', postsEnRoutes)
app.use('/RealCyprus/postrus', postsRuRoutes)
app.use('/RealCyprus/postkzs', postsKzRoutes)

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)
  try {
    mongoose.connect('mongodb+srv://admin:admin@post.xg6xb.mongodb.net/RealCyprus?retryWrites=true&w=majority', {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    const { host, port } = nuxt.options.server

    await nuxt.ready()
    // Build only in dev mode
    if (config.dev) {
      const builder = new Builder(nuxt)
      await builder.build()
    }

    // Give nuxt middleware to express
    app.use(nuxt.render)

    app.listen(port, host)
    consola.ready({
      message: `Server listening on https://${host}:${port}`,
      badge: true
    })
  } catch {
    e => console.error(e);
  }
  

  

  // Listen the server
  
}
start()
