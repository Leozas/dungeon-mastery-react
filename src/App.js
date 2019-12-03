import React from 'react';
import './App.css';
import './themestr.css';

import Homepage from './components/homepage/Homepage'
import Register from './components/Register'
import Login from './components/Login'
import Logout from './components/Logout'
import DescriptionAttributes from './components/Descriptions/DescriptionAttributes'


function App() {
  return (
    <>

      <Homepage />
      <DescriptionAttributes />
      <Register />
      <Login />
    </>
  );
}

export default App;
