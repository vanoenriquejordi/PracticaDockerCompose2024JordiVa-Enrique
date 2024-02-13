const { Router } = require('express');
const router = Router()

router.get('/', (req, res) => {
    res.send("Hola mundo backend"

    )
})

router.get('/api', (req, res) => {
    res.send("Hola mundo api"

    )
})


module.exports = router;