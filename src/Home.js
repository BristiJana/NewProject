import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Signup from './components/Signup';
import Register from './components/Register';
import Landing from './components/Landing';
import Admission from './components/Admission';
import Progress from './components/Progress'
const Home = () => {
  return (
    <div>
      <Router>
      
        <Switch>
          <Route path="/" exact>
            <Signup/>
          </Route>

          <Route path="/app" exact>
            <App />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/landing" exact>
            <Landing/>
          </Route>
          <Route path="/admission" exact>
            <Admission/>
          </Route>
          <Route path="/progress" exact>
            <Progress/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Home;

