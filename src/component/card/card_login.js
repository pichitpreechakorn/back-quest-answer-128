import React from 'react';
import { Card, Icon, Button, Checkbox, Form } from 'semantic-ui-react'
import '../card/card.css'

class CardLogin extends React.Component {

    render() {
        return (
            <div className="contai-card">
                <Card>
                    <Card.Content header>
                        <h2>เข้าสู่ระบบ</h2>
                    </Card.Content>
                    <Card.Content description>
                        <Form>
                            <Form.Field>
                                <label>Email</label>
                                <input placeholder='Ex.abcdef@gamil.com' width={8} />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input placeholder='Password' width={8} />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox label='I agree to the Terms and Conditions' />
                            </Form.Field>
                            <Button
                                fluid
                                inverted
                                color='green'
                                type='submit'
                            >
                                <span>เข้าสู่ระบบ</span>
                            </Button>
                        </Form>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='user' />
                        <span>ลงทะเบียน
                        </span>
                    </Card.Content>
                </Card>
            </div>
        );
    }

};

export default CardLogin;