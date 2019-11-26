import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './HomeComponent';

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="App-header">
                    <Router>
                        <div>
                            <Route exact path="/home" component={Home} />
                        </div>
                    </Router>
                </div>
            </div>
        )
    }
}
export default App;
