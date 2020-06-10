import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Wrapper from './Componants/Wrapper/Wrapper';
import Homepage from './Containers/Home/Homepage';


function App() {
  return (
    <Wrapper>
      <Homepage />
    </Wrapper>
  );
}

export default App;
