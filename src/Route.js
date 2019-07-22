import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header'
import Login from './components/login';
import history from './History';

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Header></Header>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/home" component={Home} />
                </div>
            </Router>
        )
    }
}

export default Routers;