import React from 'react';
import "./Assets/css/style.min.css";

import Main from './Containers/Main';
import Header from './Containers/Header';
import Aside from './Containers/Aside';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Aside />
    </div>
  );
}

export default App;
