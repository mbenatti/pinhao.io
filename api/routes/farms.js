const { Router } = require('express')
import farms from '../common/farms'

const router = Router()

// Test route
router.use('/farms', (req, res) => {
//  console.log(farms)

  res.json(farms)
})

module.exports = router
