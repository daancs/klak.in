const { hasEnoughTimePassed, addUnlock } = require('../services/unlock-guard.service')
const { unlockDoor } = require('../services/unlock.service')

const THRESHOLD = 8000 || process.env.THRESHOLD

const unlock = ('/unlock/:id',
async (req, res) => {
  const { id } = req.params
  try {
    const result = await hasEnoughTimePassed(THRESHOLD)
    const success = result.success && (await unlockDoor(id)).success
    await addUnlock(success)
    console.log(`success: ${success}`)
    res.status(200).json({ success, wait: result.wait })
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false })
  }
})

module.exports = { unlock }
