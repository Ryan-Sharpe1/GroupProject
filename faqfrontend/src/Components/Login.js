import React from 'react';
import { Button, Form, Navbar, Nav, FormControl } from 'react-bootstrap'

export default class CreateUser extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark" style={{ borderTop:'2px solid', borderBottom:'2px solid', color: 'red' }}>
                    <Navbar.Brand href="/"><img
                        src="Nationwide.png"
                        width="50"
                        height="50"
                        alt="Nationwide Logo"
                        style={{ borderRadius: '25px' }}
                    /></Navbar.Brand>
                    <Navbar.Text style={{ color: 'white' }}>Nationwide Building Society</Navbar.Text>
                    <Navbar.Text style={{ color: 'white', marginLeft: "195px" }}><h2>Login</h2></Navbar.Text>
                </Navbar>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">

                            <Form style={{ position: 'relative', left: '170px' }}>

                                <Form.Group controlId="UserName">
                                    <Form.Label style={{ color: 'grey' }}>Username:</Form.Label>
                                    <Form.Control name="username" placeholder="Username" />
                                </Form.Group>
                                <Form.Group controlId="Password">
                                    <Form.Label style={{ color: 'grey' }}>Password:</Form.Label>
                                    <Form.Control name="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Text className="text-muted">
                                    Do not share your password with anyone.
                                     </Form.Text>
                                <br />
                                <center>
                                    <Button variant="primary" type="submit">
                                        Login
                                 </Button>
                                </center>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}