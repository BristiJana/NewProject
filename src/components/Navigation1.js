import React from "react";
import "./App.css";
import { Link, withRouter } from "react-router-dom";
function Navigation1(props){

return(
  <div className="nav-scroller bg-body shadow-sm">
  <nav className="nav nav-underline solid black" aria-label="Secondary navigation">
    <Link className="nav-link active" aria-current="page" to="#">Search for University</Link>
    <Link className="nav-link" to="#">
      Counselor
    </Link>
    <Link className="nav-link low" to="#">Scheduler</Link>
    <Link className="nav-link low" to="#">Packages and Services</Link>
    
  </nav>
</div>
);
}
export default withRouter(Navigation1);