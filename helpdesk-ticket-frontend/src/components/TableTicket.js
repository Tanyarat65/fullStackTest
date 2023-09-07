import React,{useState, useEffect} from 'react'
import { Table, Tag } from 'antd'
import { EditFilled, CheckOutlined , RollbackOutlined, LoginOutlined } from '@ant-design/icons'
import Swal from 'sweetalert2'

import { useDispatch } from 'react-redux'
import { getDataEdit } from '../redux/DataTableReducer'

import configApi from '../helper/configApi'
import formatDateThai from '../helper/formatDateThai'
import padWithLeadingZeros from '../helper/padWithLeadingZeros'
import { useNavigate } from 'react-router-dom'

export default function TableTicket() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [dataSource, setDataSource] = useState([])
    const [status, setStatus] = useState('')
    const columns =[
        {
            title: 'Ticket No.',
            dataIndex: 'ticket_id',
            key: 'key',
        },
        {
            title: 'Tittle',
            dataIndex: 'tittle',
            key: 'key',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'key',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'key',
        },
        {
            title: 'age',
            dataIndex: 'age',
            key: 'key',
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'key',
        },
        {
            title: 'phone',
            dataIndex: 'phone',
            key: 'key',
        },
        {
            title: 'status',
            dataIndex: 'status',
            key: 'key',
            render:(tag)=>{
                const color = 
                    tag.includes('pending')
                    ?'gray'
                    :tag.includes('accepted')
                    ?'#0445fa'
                    :tag.includes('resolve')
                    ?'green':'red'
                return<Tag color={color}>{tag}</Tag>
            }

        },
        {
            title: 'created_at',
            dataIndex: 'created_at',
            key: 'key',
        },
        {
            title: 'updated_at',
            dataIndex: 'updated_at',
            key: 'key',
        },
        {
            title: 'Action',
            key: 'key',
            render:(record)=>{
                return <div>
                    <EditFilled
                        style={{color: '#0445fa', fontSize: '1.5rem', marginRight: '3px', cursor: 'pointer'}} 
                        title='accepted'
                        onClick={()=>onClickEdit(record)}
                    />
                    <CheckOutlined
                        style={{color: 'green', fontSize: '1.5rem', marginRight: '3px', cursor: 'pointer'}}
                        title='resolved'
                        onClick={()=>onClickResolved(record)}
                    />
                    <RollbackOutlined
                        style={{color: 'red', fontSize: '1.5rem', marginRight: '3px', cursor: 'pointer'}}
                        title='rejected'
                        onClick={()=>onClickRejected(record)}
                    />
                </div>
            },
        }
    ]

    useEffect(()=>{
        getData()
    },[status])

    const getData = async () => {

        const pathUrl = 'tickets'
        const data = await configApi('get',pathUrl)
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

    const onClickEdit = (record) => {
        // console.log(record);
        dispatch(getDataEdit(record))
        navigate(`/editTicket/${record.key}`)
    }
    const onClickResolved = async (record) => {
        const pathUrl = `editTickets/${record.key}`
        const resolved = {...record,status : 'resolved'}
        // console.log(resolved);
        const res = await configApi('put',pathUrl,resolved)

        if(res.status === "500"){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            navigate('/')
        }else{
            Swal.fire({
                position: 'top-left',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
            setStatus('resolved')
        }
    }
    const onClickRejected = async (record) => {
        const pathUrl = `editTickets/${record.key}`
        const rejected = {...record,status : 'rejected'}
        // console.log(rejected);
        const res = await configApi('put',pathUrl,rejected)

        if(res.status === "500"){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            navigate('/')
        }else{
            Swal.fire({
                position: 'top-left',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
            setStatus('rejected')
        }
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
