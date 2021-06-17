import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./App.css";
 import Navigation from './Navigation';
function Landing(props) {

const box = {
    color: 'black',
    textDecoration:'none'
}
const bi={

  width:'301px',
height: '213px',

borderRadius: '20px 20px 0px 0px'
}

return (
<div className="top">
<Navigation/>
<div className="mainbody">

 <h2>Quick Access</h2>
 
 <div className="row">
 
  <div className="col-lg-4 col-md-6 col-sm-12">
  <Link to="#" style={box}>
 <div className="card usc">
  <div className="card-body">
    <h5 className="card-title"><strong>University Search Tool</strong> </h5>
    <p className="card-text">Could your ideal course be in Australia, New zealand, Germany ?</p>
  </div>
</div>
</Link>
</div>


  <div className="col-lg-4 col-md-6 col-sm-12">
  <Link to="#" style={box}>
<div className="card usc">
  <div className="card-body">
    <h5 className="card-title"><strong>Test Prep</strong> </h5>
    <p className="card-text">Prepare and excel in GRE, GMAT, SAT, IELTS, TOEFL, and other standardized tests.</p>
  </div>
</div>
</Link>
</div>


  <div className="col-lg-4 col-md-12 col-sm-12">
  <Link to="#" style={box}>
<div className="card usc">
  <div className="card-body">
    <h5 className="card-title"><strong>Connect to counselor</strong> </h5>
    <p className="card-text">Schedule a free demo with our counselor and explore the opportunities in your way.</p>
  </div>
</div>
</Link>
</div>

</div>
<div className="item">
<h2>Important Dates</h2>
<ul>
<li>25 May: Last date for SAT applcation</li>
<li>25 May: Last date to apply for scholarship at Yale</li>
<li>25 May: Last date to apply for internship has been extended</li></ul>
</div>
<div>
<h2>Resources</h2>
<div className="row">
 <div className="col-lg-4 col-md-12 col-sm-12">
 <Link to="#" style={box}>
<div class="card sc">
  <img src="https://f1.media.brightcove.com/8/1317241555001/1317241555001_6156379784001_6156378216001-vs.jpg?pubId=1317241555001&videoId=6156378216001" style={bi} class="card-img-top" alt="..."/>
  <div class="card-body">
    
    <p class="card-text">Gmat online exam </p>
    <Link to="#" class="btn cbu">Download</Link>
  </div>
</div>
</Link>
</div>
<div className="col-lg-4 col-md-12 col-sm-12">
<Link to="#" style={box}>
<div class="card sc">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5e6fayL9AwyEZw5n-e1A6tGpIybpzrB9SVQ&usqp=CAU" style={bi} class="card-img-top" alt="..."/>
  <div class="card-body">
    
    <p class="card-text">A Comprehensive guide to common formulas used in GMAT</p>
    <Link to="#" class="btn cbu">Download</Link>
  </div>
</div>
</Link>
</div>

</div>
</div>
</div>
</div>
);
}

export default Landing;

