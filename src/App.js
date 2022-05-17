import logo from './logo.svg';
import './App.css';

// function App() {
//   return ( 
//     <div className="App">
//       <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

import React from "react"
import ReactDOM from "react-dom"
function App() {
  return (
    <div>
      <header>
        <nav>
          <img src={logo} className="App-logo" alt="logo" /> 
        </nav>
      </header>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>Its\'s Popular library</li>
        <li>I know react</li>
      </ol>
      <footer>
        <small>@ 2021 Ziroll development. All rights reserved.</small>
      </footer>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("root"))

export default App;
//used inside the index.js

