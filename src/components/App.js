import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import "./App.css";

function App() {

const history = useHistory();
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [show,setshow]=useState("true");
function handleSubmit(event) {
event.preventDefault();
}

const showpassword = () =>{

setshow(!show)

}
return (
<div>
<nav className="navbar navbar-expand-lg navbar-dark  navc">
        <div className="container">

        <a className="navbar-brand" to="#">
            <img src="data:image/jpeg;base64,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" alt="" width="42" height="42"/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </div>
      </nav>
<div className="sidenav">
<div className="login-main-text">
          <h1> Learn the GRE vocabulary with Manya’s GRE Words App</h1>  
          
         </div>
      </div>
 <div className="main">
 <div className="col-md-6 col-sm-12 new">
   <div className="login-form">
<form onSubmit={handleSubmit}>
<div className="form-group">
<p className="above">WELCOME BACK</p>
<h3>Log into your account</h3>
<label>Email</label>
<input
autoFocus
className="form-control ext"
type="text"

value={username}
onChange={e => setUsername(e.target.value)}
/>
</div>
<div className="form-group ">
<label>Password</label>
<input
className="form-control ext"
value={password}

onChange={e => setPassword(e.target.value)}
type= {show ? "password" :"text"}
/>
</div>

<div className="form-group">

<Link to="#"><h6>Forgot password?</h6></Link>
</div>
<button type="submit" class="btn btn-black" onClick={() => history.push('/landing')}>Login</button>
 <p className="below">Don’t have an account?<Link to="/register" ><span className="bspan">Register</span></Link>
</p>
</form>
</div>
</div>
</div>
</div>
);
}

export default App;
