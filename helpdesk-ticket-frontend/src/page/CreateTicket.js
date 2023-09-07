import React, { useEffect, useState } from 'react'
import '../App.css'
import { Form, Button, Input, InputNumber, Divider, Card, Col, Row,  } from 'antd'
import Swal from 'sweetalert2'
import TableTicket from '../components/TableTicket';
import configApi from '../helper/configApi';
import { useNavigate } from 'react-router-dom';
// import padWithLeadingZeros from '../helper/padWithLeadingZeros';


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperRow: {
        span: 16,
    },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} Please enter a valid email!',
        number: '${label} Please enter a valid number!',
        phone: '${label} Please enter a valid phone number (10 digits)!'
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },

};

const { TextArea } = Input




// padWithLeadingZeros((5,(data.length + 1))
export default function CreateTicket() {

    // const [ticketId, setTicketId] = useState('')
    // let tk = ''

    // useEffect(()=>{

    //     const createTicketId = async() => {
    //         const pathUrl = 'tickets'
    //         const data = await configApi('get',pathUrl)
    //         const ticket = data.length + 1
    //         return ticket
    //     }

    //     setTicketId(createTicketId)
    // },[])

    // if (ticketId !== ''){
    //     tk = ticketId
    // }else{
    //     tk = 'auto add ticketId'
    // }
    const navigate = useNavigate()

    const onFinish = async (values) => {
        const data = {...values.user,status:'pending'}
        // console.log(data);
        const pathUrl = 'createTickets'

        const res = await configApi('post',pathUrl,data)

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
            navigate('/')
        }

    };

    return (
        <div className='containerPage'>
            <Row justify='center' align='middle' gutter={8}>
                <Col xs={24} xl={12}  align='middle'>
                    <Card title="Helpdesk Support Ticket" bordered={false} style={{ padding: '9' }}>
                        <Form
                            {...layout}
                            name="nest-messages"
                            onFinish={onFinish}
                            style={{
                                maxWidth: 600,
                            }}
                            validateMessages={validateMessages}
                        >
                            <Row>
                                <Col xs={24} xl={12}>
                                    <Form.Item
                                        name={['user', 'ticket_id']}
                                        label="Ticket No"
                                        // initialValue={tk}
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        name={['user', 'tittle']}
                                        label="Tittle"
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} xl={12}>
                                    <Form.Item
                                        name={['user', 'description']}
                                        label="Description"
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <TextArea rows={4} />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Divider orientation="left">Contact</Divider>
                            <Row>
                                <Col xs={24} xl={12}>
                                    <Form.Item
                                        name={['user', 'name']}
                                        label="Name"
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <Input type='text'/>
                                    </Form.Item>
                                    <Form.Item
                                        name={['user', 'age']}
                                        label="Age"
                                        rules={[
                                            {
                                                types: 'number',
                                                label: 'number',
                                                required: true,
                                                pattern: /^(?:[5-9]|[1-9][0-9])$/,
                                                message: 'Value should be 50-99 not available ',
                                                min:5,
                                                max:99,
                                            },
                                        ]}
                                    >
                                        <Input type='number'/>
                                    </Form.Item>
                                </Col>
                                
                                <Col xs={24} xl={12}>
                                    <Form.Item
                                        name={['user', 'email']}
                                        label="Email"
                                        rules={[
                                            {
                                                type: 'email',
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        name={['user', 'phone']}
                                        label="Phone"
                                        rules={[
                                            {
                                            required: true,
                                            pattern: /^0\d{0,9}$/,
                                            message: 'Value should be a valid phone number starting with 0 and not exceeding 10 digits.',
                                            },
                                        ]}
                                    >
                                        <Input type='number' />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row justify={'center'}>
                                <Col xs={24} xl={12} >
                                    <Form.Item
                                        wrapperCol={{
                                            ...layout.wrapperCol,
                                        }}
                                    >
                                        <Button 
                                            style={{ background: '#E91E76', width: '100%'}}
                                            htmlType="submit"
                                        >
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Col>
                {/* <Col xs={24} xl={20}>
                    <Card title="Table Ticket" bordered={false} style={{overflow: 'auto'}}>
                        <TableTicket data={res}/>
                    </Card>
                </Col> */}
            </Row>
        </div>
    )
}
