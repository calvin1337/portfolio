import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Wrapper from './Componants/Wrapper/Wrapper';
import Homepage from './Containers/Home/Homepage';
import About from "./Containers/About/About";
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Contact from './Containers/Contact/Contact';

function App() {
  return (

    <div>
      <Router>
      <Wrapper>
      <Switch>

      <Route path="/" exact render={props => (
        
        <Homepage />
        
      
       )} />

       <Route path="/about" render={props => (
         <About />
       )} />

      <Route path="/contact" render={props => (
         <Contact />
       )} />
       
      </Switch>
      </Wrapper>
      </Router>
    </div>

  );
}

export default App;
