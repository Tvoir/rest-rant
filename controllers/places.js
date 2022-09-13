const router = require('express').Router()

//More code in a moment

router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router