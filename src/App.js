import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialog from "./components/Dialog/Dialog";
import {BrowserRouter, Route} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom';
import store from "./redux/state";



// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Alina test tes Edit <code>src/App.js</code> and save to reload.
//         </p>
//           <a
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
const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar state={props.state.sidebar}/>
                <div className="content">
                    <Route path='/profile'
                           render={ () => <Profile
                               profile={props.state.profile}
                               dispatch={props.dispatch}/>}/>
                    <Route path='/dialogs'
                           render={ () => <Dialog
                               dialog={props.state.dialog}
                               dispatch={props.dispatch}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;










