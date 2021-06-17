import React, { useState } from "react";
import BellIcon from 'react-bell-icon';
import Grelearning from './Grelearning.js';

import { Icon, InlineIcon } from '@iconify/react';
import bxUserCircle from '@iconify-icons/bx/bx-user-circle';

import "./App.css";
import { Link, withRouter } from "react-router-dom";
function Navigation(props) {


const box = {
    border:'0px',
    backgroundColor:'white'
}
const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <div className="navigation"> 
      <nav class=" navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">

        <Link class="navbar-brand ns" to="#">
           <img src="data:image/jpeg;base64,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" alt="" width="84" height="84"/>
          </Link>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="pro">     
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item ns">
                <Link className="nav-link" to="/landing">
                  Home
                  
                </Link>
              </li>
              
              <li className="nav-item ns">
                <button className="nav-link" style={box} onClick={togglePopup}>
                  GRE Learning Space
                </button>
                {isOpen && <Grelearning
      content={<>
        <p className="ph">Learning space will take you to The Princeton Review. </p>
        <p className="pp">Please wait.... We’ll send you the credentials over email within 24 hour.</p>
        
      </>}
      handleClose={togglePopup}
    />}
              </li>
  <li className="nav-item dropdown ns">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resources
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">International admissions update</a></li>
            <li><a className="dropdown-item" href="#">Videos</a></li>
            <li><a className="dropdown-item" href="#">Ebooks</a></li>
            <li><a className="dropdown-item" href="#">Brochures</a></li>
            <li><a className="dropdown-item" href="#">Test/Quiz</a></li>
          </ul>
        </li>
<li className="nav-item ns">
                <Link className="nav-link" to="/progress">
                 Progress dashboard
                  
                </Link>
              </li>
              <li className="nav-item ns">
                <Link className="nav-link" to="/admission">
                  Admission services
                  
                </Link>
              </li>
              <li className="nav-item ns">
                <Link className="nav-link" to="#">
                  Ask an Expert
                  
                </Link>
              </li>
              <li className="nav-item ns">
                <Link className="nav-link" to="#">
                  Products and services
                  
                </Link>
              </li>
              
              <li className="nav-item ns" style={{paddingLeft:"40px"}}>
                <Link className="nav-link" to="#">
                 <img src="data:image/png;base64,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"alt="" width="60" height="60"/>
                  
                </Link>
              </li>
              <li className="nav-item " style={{paddingLeft:"100px"}}>
              <Link className="nav-link" to="#">
              <BellIcon width='20' active={true} animate={true} /> 
    
              </Link></li>
              
              <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <Icon icon={bxUserCircle} width='35' />
          </Link>
          <ul className="dropdown-menu dropdown-menu-lg-end">
            <li><a className="dropdown-item" href="#">My Profile</a></li>
            <li><a className="dropdown-item" href="#">My Notes</a></li>
            <li><a className="dropdown-item" href="#">Shortlisted courses and universities</a></li>
            <li><a className="dropdown-item" href="#">Planner</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </li>
              
            </ul>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
