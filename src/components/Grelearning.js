import React from "react";
 import "./App.css";
const Grelearning = props => {

  
  return (
    <div className="popup-box" onClick={props.handleClose}>
      
        <div className="box">
        {props.content}
        </div>
    
    </div>
  );
};
 
export default Grelearning;