const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send(`<form method="POST" action = 'resource/views/user'>

  <div class="mb-3">
    <label for="search">Search user</label>
    <input type="text" name ="q" id="search" placeholder="tìm kiếm">
    </div>
    <button type = 'submit'>search</button>  
  </form>`)
})

router.post('/about', (req, res, next) => {
  res.send(req.query)
})
// router.post('/about', (req, res) => {

// })

module.exports = router