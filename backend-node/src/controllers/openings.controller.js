const { hasEnoughTimePassed, addUnlock } = require('../services/unlock-guard.service')

const THRESHOLD = process.env.THRESHOLD || 8000

const unlock = ('/',
async (req, res) => {
  const result = await hasEnoughTimePassed(THRESHOLD)
  if (result.success) {
    await addUnlock(true)
  }
  res.status(200).json(result)
})

module.exports = { unlock }
