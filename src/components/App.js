import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
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

<input
autoFocus
className="form-control ext"
type="text"
placeholder="User Name"
value={username}
onChange={e => setUsername(e.target.value)}
/>
</div>
<div className="form-group ">

<input
className="form-control ext"
value={password}
placeholder="Password"
onChange={e => setPassword(e.target.value)}
type= {show ? "password" :"text"}
/>
</div>

<div className="form-group">
<input className="chk" type="checkbox"  onClick={showpassword} />
<label for="showPassword">Show password</label>

</div>
<button type="submit" class="btn btn-black" onClick={() => history.push('/landing')}>Login</button>
 
</form>
</div>
</div>
</div>
</div>
);
}

export default App;