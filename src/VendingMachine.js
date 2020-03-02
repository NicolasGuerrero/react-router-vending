import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <h1>Welcome to the vending machine.</h1>
      <Link exact to="/chips">Chips</Link>
      <Link exact to="/soda">Soda</Link>
      <Link exact to="/candy">Candy</Link>
    </div>
  );
};

export default VendingMachine;