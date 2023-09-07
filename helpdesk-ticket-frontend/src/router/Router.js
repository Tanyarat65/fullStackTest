import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../page/Home'
import CreateTicket from '../page/CreateTicket'
import Navbar from '../layout/Navbar'
import EditTicket from '../page/EditTicket'

export default function Router() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/createTicket' element={<CreateTicket />} />
                <Route path='/editTicket/:id' element={<EditTicket />} />
            </Routes>
        </>
    )
}
