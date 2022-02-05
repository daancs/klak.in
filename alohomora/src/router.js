const router = require('express').Router()
const { unlock } = require('./controllers/openings.controller')

router.get('/unlock/:id', unlock)


module.exports = router
