import React,{useState, useEffect} from 'react'
import { Table, Tag } from 'antd'
import { EditFilled, CheckOutlined , RollbackOutlined } from '@ant-design/icons'
import configApi from '../helper/configApi'
import formatDateThai from '../helper/formatDateThai'
import padWithLeadingZeros from '../helper/padWithLeadingZeros'


export default function TableTicket() {

    const [dataSource, setDataSource] = useState([]);
    const columns =[
        {
            title: 'Ticket No.',
            dataIndex: 'ticket_id',
            key: '1',
        },
        {
            title: 'Tittle',
            dataIndex: 'tittle',
            key: '2',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: '3',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: '4',
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: '5',
        },
        {
            title: 'phone',
            dataIndex: 'phone',
            key: '6',
        },
        {
            title: 'status',
            dataIndex: 'status',
            key: '6',
            render:(tag)=>{
                const color = tag.includes('pending')?'gray':tag.includes('accepted')?'#0445fa':tag.includes('resolve')?'green':'red'
                return<Tag color={color}>{tag}</Tag>
            }

        },
        {
            title: 'age',
            dataIndex: 'age',
            key: '7',
        },
        {
            title: 'created_at',
            dataIndex: 'created_at',
            key: '8',
        },
        {
            title: 'updated_at',
            dataIndex: 'updated_at',
            key: '9',
        },
        {
            title: 'Action',
            key: '10',
            render:(record)=>{
                return <div style={{alignItems: 'center', width: 10}}>
                    <EditFilled style={{color: '#0445fa'}} title='accepted'/>
                    <CheckOutlined style={{color: 'green'}} title='resolved'/>
                    <RollbackOutlined style={{color: 'red'}} title='rejected'/>
                </div>
            },
        }
    ]

    useEffect(()=>{
        getData()
    },[])

    const getData = async () => {

        const data = await configApi('get','tickets')
        // console.log(data);

        let tempSource = await data.map((item)=>{

           return{
                key : item.id,
                ticket_id : padWithLeadingZeros(5,item.ticket_id),
                tittle : item.tittle,
                description : item.description,
                name : item.name,
                email : item.email,
                phone : item.phone,
                status : item.status,
                created_at : formatDateThai(item.created_at),
                updated_at : formatDateThai(item.updated_at),
                age : item.age
            }
    
        })
        setDataSource(tempSource)
    }

    

    return (
        <Table
            pagination = {true}
            columns = {columns}
            dataSource = {dataSource}
        >
        </Table>
    )
}
