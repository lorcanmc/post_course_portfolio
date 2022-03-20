import React from "react";

import lorcan from "../../images/lorcan.jpg"

export function Heading({ text }) {
  return (
    <div className="app-header">
    <div>
         <img className="me" src={lorcan} alt="me" />
    </div>
    
      <h1 className="heading">{text}</h1>
      <div></div>
    </div>
  );
}

export default Heading;
