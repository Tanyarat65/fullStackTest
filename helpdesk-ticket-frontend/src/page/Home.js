import React from 'react'
import { Card } from 'antd'
import TableTicket from '../components/TableTicket'


export default function Home() {
    return (
        <>
            <Card title="Table Ticket" bordered={false} style={{overflow: 'auto'}}>
                <TableTicket />
            </Card>
        </>
    )
}
