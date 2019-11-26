import React from 'react';
import { Button, Form, Navbar, Nav, FormControl } from 'react-bootstrap'

export default class Home extends React.Component {
    render() {
        return (
            // <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
                /* <div style={{ position: 'relative', top: '130px' }}>
                    <center>
                        <h1><a style={{ color: 'blue' }} href='/createuser'>Create User</a></h1>
                        <div style={{ maxWidth: "40vw", backgroundColor: 'red' }}>
                            <hr />
                        </div>
                        <h1><a style={{ color: 'blue' }} href='/login'>Login</a></h1>
                    </center>
                </div>
            </div> */

        )
    }
}