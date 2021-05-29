import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import "./App.css";

function Register() {

const history = useHistory();

function handleSubmit(event) {
event.preventDefault();
}


return (
<div>
<nav className="navbar navbar-expand navbar-dark bg-secondary">
        <div className="container">

        <a className="navbar-brand" to="#">
            <img src="brand.png" alt="" width="30" height="24"/>
          </a>
        
        </div>
      </nav>
<div className="sidenav">
<div className="login-main-text">
          <h1> Download our app and  get personalised guidance at every step</h1>  
          <button type="submit" className="btn btn-d">Download app</button>
         </div>
      </div>
 <div className="main">
 <div className="col-md-6 col-sm-12 new">
   <div className="login-form">
<form onSubmit={handleSubmit}>
<div className="form-group">
 <h2>Tell little bit about yourself so that we can help you in your journey</h2>
<input
autoFocus
className="form-control ext"
type="text"
placeholder="When do you plan to take GRE"

/>
</div>
<div className="dropdown form-control ext">
        <Dropdown>
        <Dropdown.Toggle 
        variant="btn btn-secondary" 
        className="dropdown-basic">
            What is your graduation yr
        </Dropdown.Toggle>

        <Dropdown.Menu >
            <Dropdown.Item href="#" >India</Dropdown.Item>
            <Dropdown.Item href="#">UK</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
</div>


<button type="submit" class="btn btn-black" onClick={() => history.push('/landing')}>Register</button>
 
</form>
</div>
</div>
</div>
</div>
);
}

export default Register;