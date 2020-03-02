import React from "react";
import { Link } from "react-router-dom";

function Soda() {
  return (
    <div>
      <p>A Soda...</p>
      <Link exact to="/">Home</Link>
    </div>
  );
};

export default Soda;