const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'nipatestfullstack',
    port: '3306',
})

db.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('mySQL successfully connected');
    }
})

// GET all tickets
app.get('/ticket', (req, res)=>{
    db.query('SELECT * FROM ticket', (err, result) => {
        if(err)  {
            console.log(err)
        }else {
            res.send(result)
        }
    })
})

// GET a single ticket by ID
app.get('/tickets/:id', (req, res) => {
    const ticketId = req.params.id;
    db.query('SELECT * FROM ticket WHERE id = ?', [ticketId], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else if (result.length === 0) {
            res.status(404).send('Ticket not found');
        } else {
            res.json(result[0]);
        }
    });
});

// POST a new ticket
app.post('/createTickets', (req, res) => {
    const newTicket = req.body;
    db.query('INSERT INTO ticket SET ?', [newTicket], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(201).json({ message: 'Ticket created successfully', id: result.insertId });
        }
    });
});

// PUT (update) an existing ticket by ID
app.put('/editTickets/:id', (req, res) => {
    const ticketId = req.params.id;
    const updatedTicket = req.body;
    db.query('UPDATE ticket SET ? WHERE id = ?', [updatedTicket, ticketId], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else if (result.affectedRows === 0) {
            res.status(404).send('Ticket not found');
        } else {
            res.status(200).json({ message: 'Ticket updated successfully' });
        }
    });
});

// DELETE a ticket by ID
app.delete('/delTickets/:id', (req, res) => {
    const ticketId = req.params.id;
    db.query('DELETE FROM ticket WHERE id = ?', [ticketId], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else if (result.affectedRows === 0) {
            res.status(404).send('Ticket not found');
        } else {
            res.status(204).send();
        }
    });
});

app.listen(5000, ()=> console.log('server on port 5000'))