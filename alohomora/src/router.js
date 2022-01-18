const router = require('express').Router()
const { route } = require('.')
const { unlock } = require('./controllers/openings.controller')

router.use('/unlock', unlock)
// create a route for the unlock endpoint with an ID param
//router.route('/unlock/:id').get(unlock)


module.exports = router
