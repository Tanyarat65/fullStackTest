import React from 'react'
import { Card, Divider } from 'antd'
import TableTicket from '../components/TableTicket'


export default function Home() {
    return (
        <>
            <Divider>Helpdesk Support Ticket</Divider>
            <Card title="Table Ticket" bordered={false} style={{overflow: 'auto'}}>
                <TableTicket />
            </Card>
        </>
    )
}
