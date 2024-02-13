const express = require('express')

const app = express();


require('./database')

app.use(require('./routes/index.routes'))

app.listen(4000)
console.log("server en el puerto: ", 4000);