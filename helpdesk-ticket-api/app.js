const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = 5000

const adminRoute = require('./routes/Admin')

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/admin', adminRoute)

app.listen(PORT, ()=> console.log('server running ' + PORT))