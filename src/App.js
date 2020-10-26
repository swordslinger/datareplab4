import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';


import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap'; 

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Read } from './read';
import { Create } from './create';

class App extends React.Component {
  render(){
    return(
      <Router>
      <div className="app">

<Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/">My App</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/read">Read</Nav.Link>
      <Nav.Link href="/create">Create</Nav.Link>
    </Nav>
 </Navbar>
 <Switch>
   <Route path='/' component={Content} exact ></Route>
   <Route path='/read' component={Read} ></Route>
   <Route path = '/create' component ={Create}></Route>
 </Switch>

  <br />
      </div>
      </Router>
    );
  
}
}

export default App;
