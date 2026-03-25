import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
    const isAuthenticated = false; // Simulate access verification

    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/dashboard'>
                    {isAuthenticated ? <Dashboard /> : <Login />}
                </Route>
            </Switch>
        </Router>
    );
};

export default App;