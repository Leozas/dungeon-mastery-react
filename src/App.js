import React from 'react';
import './App.css';
import './themestr.css';

import Homepage from './components/homepage/Homepage'
import Register from './components/Register'
import Login from './components/Login'
import Logout from './components/Logout'
import DescriptionAttributes from './components/Descriptions/DescriptionAttributes'
import DescriptionWeapons from './components/Descriptions/DescriptionWeapons'
import DescriptionArmors from './components/Descriptions/DescriptionArmors'
import DescriptionSpells from './components/Descriptions/DescriptionSpells'
import DNDCard from './components/AboutDND/DNDCard'

function App() {
  return (
    <>

      <Homepage />
      <DescriptionAttributes />
      <DescriptionWeapons />
      <DescriptionArmors />
      <DescriptionSpells />
      <DNDCard />
      <Register />
      <Login />
    </>
  );
}

export default App;
