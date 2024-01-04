import React from "react";
import Button from '@mui/material/Button';

import DrawerAppBar from "./Navbar";
import Footer from "./Footer";
import MultiActionAreaCardGrid from "./Card";





const Home = () =>{
  return(
    
    <div >
      <DrawerAppBar/>
      <br></br><br></br><br></br><br></br><br></br>
      
      <h1>     
        "WE MAKE A 
         LIVING BY
          WHAT WE GET,
         BUT WE MAKE A
            LIFE BY
        WHAT WE GIVE."</h1>
        <br></br>
         <h1><Button variant="contained" href="/Login">
               Get Started
         </Button></h1>
        <br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br>
      <MultiActionAreaCardGrid/>
        <Footer/>
    </div>
  )
}
export default Home;