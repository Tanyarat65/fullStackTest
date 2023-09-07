import React, { useEffect, useState } from 'react'
import '../App.css'
import { Form, Button, Input, Divider, Card, Col, Row, Select } from 'antd'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import configApi from '../helper/configApi';

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

export default function EditTicket() {
    const navigate = useNavigate()
    const { dataEdit } = useSelector(state => state.ticketTempSlice)
    const id = useParams().id
    const [form] = Form.useForm();
    const { Option } = Select;

    // console.log(dataEdit);
    const [initData, setInitData] = useState(dataEdit)

    const onFinish = async (values) => {
        const pathUrl = `editTickets/${id}`
        values = {...values,status : 'accepted'}
        const res = await configApi('put',pathUrl,values)

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
                            form={form}
                            {...layout}
                            name="nest-messages"
                            onFinish={onFinish}
                            style={{
                                maxWidth: 600,
                            }}
                            validateMessages={validateMessages}
                            initialValues={{
                                    key : initData.key,
                                    ticket_id : initData.ticket_id,
                                    tittle : initData.tittle,
                                    description : initData.description,
                                    name : initData.name,
                                    age : initData.age,
                                    email : initData.email,
                                    phone : initData.phone,
                                    status : initData.status,
                            }}
                        >
                        <Row>
                            <Col xs={24} xl={12}>
                                <Form.Item
                                    name='ticket_id'
                                    label="Ticket No"
                                    // initialValue={initData.ticket_id}
                                    // rules={[
                                    //     {
                                    //         required: true,
                                    //     },
                                    // ]}
                                >
                                    <Input disabled/>
                                </Form.Item>

                                <Form.Item
                                    name='tittle'
                                    label="Tittle"
                                    // rules={[
                                    //     {
                                    //         required: true,
                                    //     },
                                    // ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} xl={12}>
                                <Form.Item
                                    name='description'
                                    label="Description"
                                    // rules={[
                                    //     {
                                    //         required: true,
                                    //     },
                                    // ]}
                                >
                                    <TextArea rows={4} />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Divider orientation="left">Contact</Divider>
                        <Row>
                            <Col xs={24} xl={12}>
                                <Form.Item
                                    name='name'
                                    label="Name"
                                    // rules={[
                                    //     {
                                    //         required: true,
                                    //     },
                                    // ]}
                                >
                                    <Input type='text' />
                                </Form.Item>
                                <Form.Item
                                    name='age'
                                    label="Age"
                                    rules={[
                                        {
                                            types: 'number',
                                            label: 'number',
                                            required: true,
                                            pattern: /^(?:[5-9]|[1-9][0-9])$/,
                                            message: 'Value should be 5-99 not available ',
                                            min:5,
                                            max:99,
                                        },
                                    ]}
                                >
                                    <Input  />
                                </Form.Item>
                            </Col>
                            
                            <Col xs={24} xl={12}>
                                <Form.Item
                                    name='email'
                                    label="Email"
                                    rules={[
                                        {
                                            type: 'email',
                                            // required: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name='phone'
                                    label="Phone"
                                    rules={[
                                        {
                                        // required: true,
                                        pattern: /^0\d{0,9}$/,
                                        message: 'Value should be a valid phone number starting with 0 and not exceeding 10 digits.',
                                        },
                                    ]}
                                >
                                    <Input type='number' />
                                </Form.Item>
                                <Form.Item
                                    name='status'
                                    label="Status"
                                    rules={[
                                        {
                                            // required: true,
                                        },
                                    ]}
                                >
                                    <Select>
                                        <Option value="pending">Pending</Option>
                                        <Option value="accepted">Accepted</Option>
                                        <Option value="resolved">Resolved</Option>
                                        <Option value="reject">Reject</Option>
                                    </Select>
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
                                        Edit
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                        </Form>

                    </Card>
                </Col>
            </Row>
        </div>
    )
}


