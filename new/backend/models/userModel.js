const {model,Schema} = require('../connection');

const schemaObject =  new Schema({
    name : String,
   
    email : String,
    password: String,
})

module.exports = model('users', schemaObject);