import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Components/HomeComponent';
import CreateUser from './Components/CreateUser';

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Router>
                        <div>
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/createuser" component={CreateUser} />
                        </div>
                    </Router>
                </div>
            </div>
        )
    }
}
export default App;
