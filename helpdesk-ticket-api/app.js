const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


const adminRoute = require('./routes/Admin')


const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/admin', adminRoute)

app.listen(PORT, ()=> console.log('server running ' + PORT))