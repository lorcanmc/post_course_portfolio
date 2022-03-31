import React from "react";

import lorcan from "../../images/lorcan.jpg";

export function Header({ text }) {
  return (
    <div>
      <div>
        <img className="me" src={lorcan} alt="me" />
      </div>

      <h1 className="heading">{text}</h1>

      <div className="introduction">
        <p className="introduction">
          I'm a software developer who loves to create. Formerly a warehouse
          vehicle driver I made a decision to pursue a passion and become a
          coder. I've learnt a lot through the School of Code, how to
          communicate as a team and how to explore new coding in a fun and
          digestible way.
        </p>
      </div>
    </div>
  );
}

export default Header;
