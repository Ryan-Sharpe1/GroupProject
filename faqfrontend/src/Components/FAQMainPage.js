import React from 'react';
import { Button, Form, Navbar, FormControl, Modal } from 'react-bootstrap'
import './css/FAQ.css'
import { TextArea } from 'semantic-ui-react'

const TextAreaExampleTextArea = () => (
    <Form>
        <TextArea placeholder='Question...' />
    </Form>
)

export default class Home extends React.Component {

    render() {

        return (
            <div>
                <Navbar bg="primary" variant="dark" style={{ borderTop: '2px solid', borderBottom: '2px solid', color: 'red' }}>
                    <Navbar.Brand href="/"><img
                        src="Nationwide.png"
                        width="50"
                        height="50"
                        alt="Nationwide Logo"
                        style={{ borderRadius: '25px' }}
                    /></Navbar.Brand>
                    <Navbar.Text style={{ color: 'white' }}>Nationwide Building Society</Navbar.Text>
                    <Navbar.Text style={{ color: 'white', marginLeft: "200px" }}><h2>FAQ</h2></Navbar.Text>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ marginLeft: "190px" }} />
                        <Button><img src="search.png" width="30" height="30" /></Button><br /><br />
                    </Form>
                </Navbar>
                <div className="container">
                    <div clasName="row">
                        <div className="col">

                            <div className="multiline" style={{ float: 'right', position: 'relative', left: '55px', top: '5px' }}>
                                <Button variant="danger">Create a Question</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{ width: '500px', borderRadius: '25px', backgroundColor: '#5aa3f2', border: '2px solid', borderColor: 'red', float: 'center', position: 'relative', top: '20px' }}>
                    <div clasName="row">
                        <div className="col">
                            <div>
                                <center>
                                    <Form style={{ color: 'white' }}>
                                        <br />
                                        <center><h3>Question Form</h3></center>
                                        <Form.Group controlId="Question"><br />
                                            <Form.Label style={{ color: 'white' }}>Please Enter The Question You Would Like to Ask:</Form.Label>
                                            <form class="ui form"><textarea style={{width:'400px', height:'100px'}}placeholder="Question..." rows="3"></textarea></form>
                                        </Form.Group>
                                        <center>
                                            <Button variant="secondary" type="submit" style={{ marginRight: '5px' }}>
                                                Close
                                            </Button>
                                            <Button variant="danger" type="submit">
                                                Submit
                                             </Button>
                                            <br /><br />
                                        </center>
                                    </Form>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

                                    // <Form>
                                    //     <TextBoxComponent multiline={true} placeholder='What question would you like to ask?' style={{ height: "50px", width: "400px" }} /><br />
                                    //     <Button variant="danger">Create a Question</Button>
                                    // </Form>