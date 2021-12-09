import { useAuth } from './../../context/AuthProvider/useAuth';
import { Col, Row, Form, Input, Button, message } from 'antd'
import Router from 'next/router'

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {

  const auth = useAuth()

  async function onFinish(values: { email: string, password: string }) {

    try {
      await auth.authenticate(values.email, values.password)
      Router.push('/profile')

    } catch {
      message.error('Email ou senha inválidos')
    }
  }

  if (!auth.email) {
    return (
      <Row justify='center' align='middle' style={{ height: '100vh' }}>
        <Col span={12}>
          <Form name='basic' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={onFinish}>
            <Form.Item label='Email' name='email'>
              <Input />
            </Form.Item>

            <Form.Item label='Password' name='password'>
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type='primary' htmlType='submit'>
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    )
  }

  return children
}