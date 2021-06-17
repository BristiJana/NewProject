import React, { useState, useMemo } from "react";
import { Link } from 'react-router-dom';
import "./App.css";
 import Navigation from './Navigation';
 import Navigation1 from './Navigation1';
 import Select from 'react-select';
import countryList from 'react-select-country-list';
function University(props) {

const box = {
    color: 'black',
    textDecoration:'none'
}

const uc={
  marginLeft:'30px',
  marginTop:'20px',


}
const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

return (
<div className="top">
<Navigation/>
<Navigation1/>

<div class="wrapper">
       
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>Filter your results</h3>
            </div>

            <ul class="list-unstyled components ps-0">
            
                    <li class="mb-1">
        <a class="btn btn-lg btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
          Country or Destination
        </a>
        <div class="collapse show" id="home-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Select class="link-dark rounded" options={options} value={value} onChange={changeHandler} /></li>
            
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <a class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          Specialization
        </a>
        <div class="collapse" id="dashboard-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">op1</a></li>
            <li><a href="#" class="link-dark rounded">op2</a></li>
            <li><a href="#" class="link-dark rounded">op3</a></li>
            <li><a href="#" class="link-dark rounded">op4</a></li>
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <a class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
          Level of education
        </a>
        <div class="collapse" id="orders-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">op1</a></li>
            <li><a href="#" class="link-dark rounded">op2</a></li>
            <li><a href="#" class="link-dark rounded">op3</a></li>
            <li><a href="#" class="link-dark rounded">op4</a></li>
          </ul>
        </div>
      </li>
            </ul>

            
        </nav>

        
        <div id="content">

            
<div className="ub">
            <div class="btn-group">
  <button class="btn btn-light btn-lg adm" type="button">
    Search for University,course or destination country

  </button>
  <button type="button"  class="btn btn-lg btn-light admd dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span style={{paddingRight:"10px"}}> University</span> 


  </button>
  <ul class="dropdown-menu admdp">
  <li> Course</li>
  </ul>
</div>
<div class="btn-group">
  <button class="btn btn-outline-primary btn-sm dropdown-toggle usp" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Sort by:Relevance 
  </button>
  <ul class="dropdown-menu">
    <li>Ranking : High to Low</li>
    <li>Fees : Low to High</li>
    <li>Test score : Low to High</li>
  </ul>
</div>
</div>

            <div className="row">
 <div className="col-lg-12">
 <Link to="#" style={box}>
<div class="card mb-3 unc" >
  <div class="row g-0">
    <div class="col">
      <img className="uig"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG8M32p6ujYlZam6q_okCMKvk37obF-qbBtOI2qyIzOUYrLRCoBH7_gzQ4fOFwic4GXJmhsCy_t7kC9g&usqp=CAU" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" style={uc}>Harvard University <button  type="button" class="btn btn-primary btn-lg ucbt">Save School</button></h5>
        <p class="card-text" style={uc}>Cambridge, Massacheussets<button  type="button" class="btn btn-outline-primary btn-lg ucbb">View School</button></p>
       
      </div>
    </div>
  </div>
</div>
</Link>
</div>
<div className="col-lg-12">
<Link to="#" style={box}>
<div class="card mb-3 unc" >
  <div class="row g-0">
    <div class="col">
      <img className="uig" src="https://www.collegeconsensus.com/wp-content/uploads/2016/12/o-HARVARD-UNIVERSITY-BUILDING-facebook.jpg" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" style={uc}>California University <button  type="button" class="btn btn-primary btn-lg ucbt">Save School</button></h5>
        <p class="card-text" style={uc}>Cambridge, Massacheussets<button style={{marginLeft:"330px"}} type="button" class="btn btn-outline-primary btn-lg ucbb">View School</button></p>
      </div>
    </div>
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


export default University;

