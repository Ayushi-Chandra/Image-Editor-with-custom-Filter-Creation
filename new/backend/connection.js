const mongoose = require('mongoose');

const dbname = 'imageeditor';
const dbUrl= `mongodb+srv://Ayushi123:rayayu123@cluster0.aa5jg.mongodb.net/${dbname}?retryWrites=true&w=majority`


// asynchrounous function
// this function will return a promise

// const res = await mongoose.connect(dbUrl);

mongoose.connect(dbUrl)
.then((result) => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;