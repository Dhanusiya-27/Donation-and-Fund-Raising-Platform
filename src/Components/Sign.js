import React from 'react'
import {Link} from 'react-router-dom';
import { Button} from '@mui/material';
import './Signup.css';

    const Signup = () => {
    return(
        <div class="container">
 <form action="" id="form">
 <h1>SIGN UP</h1>
 <div class="input-group">
 <label for="username">Username</label>
 <input type="text" id="username" name="username"></input>
 <div class="error"></div>
 </div>
 <div class="input-group">
 <label for="email">Email</label>
 <input type="text" id="email" name="email" ></input>
 <div class="error"></div>
 </div>
 <div class="input-group">
 <label for="password">Password</label>
 <input type="password" id="password" name="password"></input>
 <div class="error"></div>
 </div>
 <div class="input-group">
 <label for="password">ConfirmPassword</label>
 <input type="password" id="password" name="password"></input>
 <div class="error"></div>
 </div>
 <div class="input-group">
 <label for="mobile">Mobile Number</label>
 <input type="tel" ></input>
 <div class="error"></div>
 </div>
 <Button variant="contained" color="success" href="/Login">Register</Button>
 </form>
 </div>
    )
}
export default Signup;