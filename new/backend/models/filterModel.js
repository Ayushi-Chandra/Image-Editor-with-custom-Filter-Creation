const {model,Schema, Types} = require('../connection');

const schemaObject =  new Schema({
    name : String,
    image : String,
    values : Array,
    createdBy : {type : Types.ObjectId, ref : 'users'},
    createdAt: Date,
})

module.exports = model('filters', schemaObject);