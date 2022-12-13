
//importing express
const express = require('express');
const cors= require('cors');

//intializ express
const app = express();

const port = 5000;

const userRouter = require('./routers/userRouter');
const filterRouter = require('./routers/filterRouter');
const utilRouter = require('./routers/util');


//to allow react forntend to access the backend
app.use(cors ({origin: ['http://localhost:3000']}))
app.use(express.json());

//middleware
app.use('/user', userRouter);
app.use('/filter', filterRouter);
app.use('/util', utilRouter);

app.use(express.static('./static/uploads'))

// creating a route or endpoint
app.get( '/',(req,res)=>{
    res.send('Request accepted on /');
})

app.get('/home',(req,res)=>{
    res.send('Request accepted on /home')
})

//starting server
app.listen(port, () => {
    console.log('express API server started');
})

