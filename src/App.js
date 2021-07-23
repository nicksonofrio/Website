import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import {API, Storage} from 'aws-amplify';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />

          
        </Switch>
      </Router>
      
      
      <AmplifySignOut />
    </div>
  );
}

//export default withAuthenticator(App);
export default (App);
