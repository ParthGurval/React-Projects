import React from 'react'
import logo from './logo.svg';
import '../src/Css-Component/Navbar1.css';
import './Css-Component/Header.css'
import Navbar1 from './Component/Navbar1';
import Header from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css'






function App() {
  return (
    <div className="App">

    <Navbar1/>
    <Header/> 

    {/* <LoginPage/> */}

    </div>
  );
}


export default App;
