const mongoose = require('mongoose')


// connect mongoose to mongodb route
// update name_db. convention: lowercase, undesrcore, hyphen is ok

mongoose.connect('mongodb://localhost/author_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

// promise for connection