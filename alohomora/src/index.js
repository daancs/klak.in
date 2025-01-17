const express = require('express')
const router = require('./router')
const cors = require('cors')
const knex = require('../db/knex')
const reconnectInterval = 5000

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(router)
app.get('/', (req, res) => {
  res.status(200).json('Quite alright thanks')
})

if (process.env.NODE_ENV !== 'test') {
  ;(async () => {
    await isDatabaseUp()
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`)
    })
  })()
}

async function isDatabaseUp() {
  return new Promise(async res => {
    try {
      console.log(`database url: ${process.env.CONNECTION_STRING}`)
      console.log('attempting to connect to database...')
      await knex.migrate.latest()
      console.log('connected to database successfully')
      return res('nice')
    } catch (err) {
      console.error(err)
      console.log(
        `connecting to database failed, attempting to reconnect in ${reconnectInterval}ms...`,
      )
      setTimeout(isDatabaseUp, reconnectInterval)
    }
  })
}

module.exports = app
