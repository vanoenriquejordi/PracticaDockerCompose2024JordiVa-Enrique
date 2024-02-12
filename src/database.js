const mongoose = require('mongoose')

mongoose.connect('mongodb://mongodb://mongo/mydatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connect('mongodb://localhost/mydatabase')
.then(db => console.log('Db is conected to', db.connection.host))
.catch(err => console.error(err));