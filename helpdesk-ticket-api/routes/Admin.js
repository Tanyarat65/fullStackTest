const express = require('express')
const router = express.Router()
const pool = require('../helper/connectApi')


// GET all tickets
router.get('/ticket', (req, res)=>{
    pool.query('SELECT * FROM ticket', (err, result) => {
        if(err)  {
            console.log(err)
        }else {
            res.send(result)
        }
    })
})

// GET a single ticket by ID
router.get('/tickets/:id', (req, res) => {
    const ticketId = req.params.id
    pool.query('SELECT * FROM ticket WHERE id = ?', [ticketId], (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send('Internal Server Error')
        } else if (result.length === 0) {
            res.status(404).send('Ticket not found')
        } else {
            res.json(result[0])
        }
    })
})

// POST a new ticket
router.post('/createTickets', (req, res) => {
    const newTicket = 
    {
        ticket_id: req.body.ticket_id,
        tittle: req.body.tittle,
        description: req.body.description,
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
        phone: req.body.phone,
    };
    console.log(newTicket);

    pool.query('INSERT INTO ticket SET ?', newTicket, (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send('Internal Server Error is ' + err)
        } else {
            res.status(201).json({ message: 'Ticket created successfully', id: result.insertId })
        }
    })
})

// PUT (update) an existing ticket by ID
router.put('/editTickets/:id', (req, res) => {
    // const nowDateTime = Math.floor(Date.now()/1000)
    // console.log(nowDateTime);
    const ticketId = req.params.id
    const updatedTicket = 
    {
        ticket_id: req.body.ticket_id,
        tittle: req.body.tittle,
        description: req.body.description,
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
        phone: req.body.phone,
        status: req.body.status,
        // updated_at: nowDateTime,
    };
    pool.query('UPDATE ticket SET ? WHERE id = ?', [updatedTicket, ticketId], (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send('Internal Server Error')
        } else if (result.affectedRows === 0) {
            res.status(404).send('Ticket not found')
        } else {
            res.status(200).json({ message: 'Ticket updated successfully' });
        }
    })
})

// DELETE a ticket by ID
// router.delete('/delTickets/:id', (req, res) => {
//     const ticketId = req.params.id
//     pool.query('DELETE FROM ticket WHERE id = ?', [ticketId], (err, result) => {
//         if (err) {
//             console.log(err)
//             res.status(500).send('Internal Server Error')
//         } else if (result.affectedRows === 0) {
//             res.status(404).send('Ticket not found')
//         } else {
//             res.status(204).send()
//         }
//     })
// })

module.exports = router