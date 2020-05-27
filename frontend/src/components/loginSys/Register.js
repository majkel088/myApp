import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function Register() {
    return (
        <Form action="singup" method="POST">
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" name="first_name" placeholder="FirstName" required />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" name="last_name" placeholder="LastName" required />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Username" required />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
            </Form.Row>
            <Form.Group controlId="formGridAddress1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name="email" placeholder="Email" required />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}
export default Register;