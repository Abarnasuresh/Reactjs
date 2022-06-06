// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react"
import Navbar from "../src/components/Navbar"
import Hero from   "../src/components/Hero"
import Card from "../src/components/card"
import data from "./data" 

import "./style.css"

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)
*/
export default function App() {

    const cards = data.map(info=>{
        return ( <Card
            key = {info.id}
            info = {info}
        /> )
    })
    return (
        <div>
            <Navbar/>
            <Hero/>
            <section className="cards-list">
                {cards}
            </section>
            
        </div>
            
    )
} 