import React from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/' component={HomeScreen} exact />
      <section className='container' >
      <Route path='/register' component={RegisterScreen} />
      <Route path='/login' component={LoginScreen} exact />
      </section>
      
    </Router>
      );
}

export default App;
