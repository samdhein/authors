// require mongoose
const mongoose = require('mongoose')

// create a schema
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,   // (String, Number, Boolean, Array)
        required : [true, "Name is required"],  // validations
        minlength: [3, "Name must be at least 3 characters"] // validations
    }
}, {timestamps: true})

// export
const Author = mongoose.model('Author', AuthorSchema)
module.exports = Author