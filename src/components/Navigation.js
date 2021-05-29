import React from "react";
import BellIcon from 'react-bell-icon';

import { Icon, InlineIcon } from '@iconify/react';
import bxUserCircle from '@iconify-icons/bx/bx-user-circle';

import "./App.css";
import { Link, withRouter } from "react-router-dom";
function Navigation(props) {
  return (
    <div className="navigation"> 
      <nav class=" navbar navbar-expand-lg navbar-light bg-secondary">
        <div class="container-fluid">

        <Link class="navbar-brand" to="#">
            <img src="./brand.png" alt="" width="30" height="24"/>
          </Link>
         
          <div className="pro">     
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/landing">
                  Home
                  
                </Link>
              </li>
              <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Learning Space
          </Link>
          <ul className="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Coursework</a></li>
            <li><a class="dropdown-item" href="#">Practice Test</a></li>
            <li><a class="dropdown-item" href="#">Resources</a></li>
          </ul>
        </li>
  <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resources
          </Link>
          <ul className="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">International admissions update</a></li>
            <li><a className="dropdown-item" href="#">Videos</a></li>
            <li><a className="dropdown-item" href="#">Ebooks</a></li>
            <li><a className="dropdown-item" href="#">Brochures</a></li>
            <li><a className="dropdown-item" href="#">Test/Quiz</a></li>
          </ul>
        </li>
<li className="nav-item">
                <Link className="nav-link" to="#">
                 Progress dashboard
                  
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admission">
                  Admission services
                  
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Ask a question
                  
                </Link>
              </li>
              
              <li className="nav-item" style={{paddingLeft:"100px"}}>
              <Link className="nav-link" to="#">
              <BellIcon width='20' active={true} animate={true} /> 
    
              </Link></li>
              
              <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <Icon icon={bxUserCircle} width='35' />
          </Link>
          <ul className="dropdown-menu dropdown-menu-lg-end  bg-secondary">
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
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
