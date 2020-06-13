import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Wrapper from './Componants/Wrapper/Wrapper';
import Homepage from './Containers/Home/Homepage';
import About from "./Containers/About/About";
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Contact from './Containers/Contact/Contact';
import Blog from './Containers/Blog/Blog';
import BlogPost from './Containers/Blog/BlogPost';

function App() {
  return (

    <div>
      <Router>
      <Wrapper>
      <Switch>

      <Route path="/" exact render={props => (
        
        <Homepage />
        
      
       )} />

       <Route exact path="/about" render={props => (
         <About />
       )} />

      <Route exact path="/contact" render={props => (
         <Contact />
       )} />

        <Route exact path="/blog" render={props => (
         <Blog />
       )} />
       
       <Route exact path="/blog/:id" render={props => (
         <BlogPost />
       )} />

      </Switch>
      </Wrapper>
      </Router>
    </div>

  );
}

export default App;
