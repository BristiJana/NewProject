import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';


function Signup() {




const [username, setUsername] = useState("");
const history = useHistory();

function handleSubmit(event) {
event.preventDefault();
   history.push({
      pathname: '/register',
      search: '?query=abc',
           state: { detail: username }
    });
}

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUsername((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

return (
<div>
<nav className="navbar navbar-expand navbar-dark  navc">
        <div className="container">

        <a className="navbar-brand" to="#">
            <img src="brand.png" alt="" width="30" height="24"/>
          </a>
        <div className="form-group">
        Already Have an account?
         <button type="submit" class="btn btn-secondary btn-block navbut" onClick={() => history.push('/app')}>Login</button>
           </div>
        </div>
      </nav>
<div className="sidenav">
<div className="login-main-text">
          <h1> We are ready to set up your free trial of Manya education</h1>  
         </div>
      </div>
 <div className="main">
 <div className="col-md-6 col-sm-12 new">
   <div className="login-form">
<form onSubmit={handleSubmit}>
<div className="form-group">

<input
autoFocus
className="form-control ext"
type="text"
placeholder="First Name"
onChange={handleInputChange}
/>
</div>

<div className="form-group ">

<input
autoFocus
className="form-control ext"
type="text"
placeholder="Email address"
/>
</div>
<div className="dropdown form-control ext">
        <Dropdown>
        <Dropdown.Toggle 
        variant="btn btn-secondary" 
        className="dropdown-basic">
            Which state you are in?
        </Dropdown.Toggle>

        <Dropdown.Menu >
            <Dropdown.Item href="#" >India</Dropdown.Item>
            <Dropdown.Item href="#">UK</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
</div>
<div className="dropdown  form-control ext">
        <Dropdown>
        <Dropdown.Toggle 
        variant="btn btn-secondary" 
        className="dropdown-basic">
            Center
        </Dropdown.Toggle>

        <Dropdown.Menu >
            <Dropdown.Item href="#" >Center1</Dropdown.Item>
            <Dropdown.Item href="#">Center2</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
</div>
<div className="dropdown form-control ext">
        <Dropdown>
        <Dropdown.Toggle 
        variant="btn btn-secondary" 
        className="dropdown-basic">
            Test
        </Dropdown.Toggle>

        <Dropdown.Menu >
            <Dropdown.Item href="#" >Test1</Dropdown.Item>
            <Dropdown.Item href="#">Test2</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
</div>
<div className="form-group ">
<input
className="form-control ext"
placeholder="Password"
type= "password"
/>
</div>
<div className="form-group">
<input className="chk" type="checkbox" />
<label className="cong">Send me news and updates related to study abroad via email</label>

</div>
<div className="form-group">
<input className="chk" type="checkbox" />
<label className="cong">Call me for a free demo counselling session </label>

</div>

<button type="submit" class="btn btn-black">Next</button>
 
</form>
</div>
</div>
</div>
</div>);
}

export default Signup;