const express = require('express')
const dbConnect = require('./dbConnect')
const app = express();
const cors = require('cors');

require('dotenv').config({path: '.env'});
const port = process.env.port;
app.use(cors());

app.use(express.json())
const userRoute = require('./routes/userRoute')

app.use('/api/users/',userRoute)

app.get('/', (req, res)=> res.send('Hello World'))
app.listen(port,() => console.log(`Node JS server is started at ${port}!`));