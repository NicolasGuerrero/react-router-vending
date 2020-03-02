import React from "react";
import { Link } from "react-router-dom";

function Candy() {
  return (
    <div>
      <p>Some candy...</p>
      <Link exact to="/">Home</Link>
    </div>
  )
};

export default Candy;