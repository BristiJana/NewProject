import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./App.css";
 import Navigation from './Navigation';
 
const Progress = props => {

  const box = {
    color: 'black',
    textDecoration:'none'
}

  return (
    <div className="top">
<Navigation/>
<div className="nav-scroller bg-body shadow-sm">
  <nav className="nav nav-underline solid black" aria-label="Secondary navigation">
    <Link className="nav-link active" aria-current="page" to="#">Admission</Link>
    <Link className="nav-link" to="#">
      Test Prep
    </Link>
    </nav>
</div>
<div className="mainbody">
  <div className="row">
 <div className="col-lg-4 col-md-6 col-sm-12">
 <Link to="#" style={box}>
<div className="card ps">
      <img className="ai" src="" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Practise test completed </h5>
        
      </div>
    </div>
</Link>
</div>
<div className="col-lg-4 col-md-6 col-sm-12">
<Link to="#" style={box}>
<div className="card ps">
      <img className="ai" src="" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Learning modules completed subject vise</h5>
        
      </div>
    </div>
</Link>
</div>
</div>
<div className="row">
<div className="col-lg-12 col-md-12 col-sm-12">
<Link to="#" style={box}>
<div className="card ps">
      <img className="ai" src="" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Practise test completed </h5>
        
      </div>
    </div>
</Link>
</div>
 </div>
 </div>
    </div>
  );
};
 
export default Progress;