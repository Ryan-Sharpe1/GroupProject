import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Components/HomeComponent';
import CreateUser from './Components/CreateUser';
import Login from './Components/Login';
import MainPage from './Components/FAQMainPage'

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Router>
                        <div>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/createuser" component={CreateUser} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/faqmainpage" component={MainPage} />
                        </div>
                    </Router>
                </div>
            </div>
        )
    }
}
export default App;
