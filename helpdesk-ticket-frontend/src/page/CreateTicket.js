import React from 'react'
import '../App.css'
import { Form, Button, Input, InputNumber, Divider, Card, Col, Row, Table } from 'antd'
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
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

const onFinish = (values) => {
    console.log(values)
};


export default function CreateTicket() {
    return (
        <div className='containerPage'>
            <Row justify='center' gutter={8}>
                <Col>
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
                            <Form.Item
                                name={['user', 'Ticket']}
                                label="Ticket No"
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
                            <Divider orientation="left">Contact</Divider>
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
                                name={['user', 'name']}
                                label="Name"
                                rules={[
                                    {
                                        type: 'name',
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
                                        type: 'number',
                                        min: 0,
                                        max: 99,
                                    },
                                ]}
                            >
                                <InputNumber />
                            </Form.Item>
                            <Form.Item
                                name={['user', 'phone']} 
                                label="Phone"
                                rules={[
                                    {
                                        type: 'phone',
                                        required: true,
                                        pattern: /^[\d]{0,9}$/,
                                        message: "Value should be less than 999999999",
                                    },
                                ]}
                            >
                                <Input type='number' />
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{
                                    ...layout.wrapperCol,
                                    offset: 8,
                                }}
                            >
                                <Button style={{ background: '#E91E76' }} htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col>
                    <Card title="Table Ticket" bordered={false} style={{}}>
                        <Table

                        >
                        </Table>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
