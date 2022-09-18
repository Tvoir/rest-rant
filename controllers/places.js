const router = require('express').Router()

//More code in a moment

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/restaurant.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/bar.jpg'
  }]
  
  res.render('places/index', { places })
  
})

module.exports = router