import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import NotFound from './NotFound'
import About from './About'
import User from './User';

const Routes = () => (
    <BrowserRouter>
        <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/about">About</Link> </li>
            <li><Link to="/user">user</Link> </li>
        </ul>
        <Switch>
            <Route path="/" exact component={NotFound} />
            <Route path="/user" component={User}></Route>
            <Route path="/about" component={About}></Route>
        </Switch>
    </BrowserRouter>
)
export default Routes