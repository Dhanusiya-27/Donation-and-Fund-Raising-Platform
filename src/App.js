import React from 'react'
 import './App.css';
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";

import Home from './Components/Home';

import DrawerAppBar from './Components/Navbar';
import LoginPage from './Components/Login';
import Signup from './Components/Sign';




 const App = () => {
return (
<div className="app">

      <Router> 
           {/* <nav className='navi'>
              <ul className='Hello'>
                <li className='active'>
           <Link  style={{ textDecoration: 'none' ,color:'white'}}to="/">HOME</Link>
           </li>
            <li className='actives'>
              <Link  style={{textDecoration: 'none ', color:'white'}}to="/Login" >LOGIN</Link>
               </li>
            <li className='activess'>
              <Link  style={{ textDecoration: 'none',color:'white'}}to="/Register">REGISTER</Link>
              </li>
              </ul>
              </nav> */}
               <Routes>
                  <Route exact path="/" element={<Home/>}/>

                    <Route exact path="/Login" element={<LoginPage/>} />
                    <Route path="/Sign" element={ <Signup/>} />
                  
                     </Routes>
            </Router> 
                     
            
              
         </div>
    )
   }
 export default App;