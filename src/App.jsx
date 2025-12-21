import { useState } from "react";
import Navbar from "./Navbar.jsx";
import Intro from "./Intro.jsx";
import Linebreak from "./Linebreak.jsx";
import About from "./pages/About.jsx"
import Home from "./pages/Home.jsx";
import Shopify from './pages/Shopify.jsx'
import './App.css'
import Langdesc from "./Langdesc.jsx";
import Foooter from "./Foooter.jsx";
function App(){

  return (
    <>
  
    <Navbar/>

        <Intro />
        <Linebreak/>
        <Langdesc/>
        <Linebreak/>
        <Foooter/>
      
 
    </>
  );
}

export default App;
