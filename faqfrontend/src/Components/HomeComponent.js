import React from 'react';
import { Button, Form, Navbar, Nav, FormControl } from 'react-bootstrap'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark" style={{borderTop:'2px solid', borderBottom:'2px solid', color:'red'}}>
                <Navbar.Brand href="/"><img
                        src="Nationwide.png"
                        width="50"
                        height="50"
                        alt="Nationwide Logo"
                        style={{borderRadius:'25px'}}
                    /></Navbar.Brand>
                    <Navbar.Text style={{color:'white'}}>Nationwide Building Society</Navbar.Text>
                    <Nav className="mr-auto" style={{visibility:'hidden'}}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline style={{visibility:'hidden'}}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="danger">Search</Button>
                    </Form>
                </Navbar>
                <div style={{ position: 'relative', top: '130px' }}>
                    <center>
                        <h1><a style={{ color: 'blue' }} href='/createuser'>Create User</a></h1>
                        <div style={{ maxWidth: "40vw", backgroundColor: 'red' }}>
                            <hr />
                        </div>
                        <h1><a style={{ color: 'blue' }} href='/login'>Login</a></h1>
                    </center>
                </div>
            </div>

        )
    }
}