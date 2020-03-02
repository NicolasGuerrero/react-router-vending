import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

function Chips() {
  const [inventory, setInventory] = useState(3);
  const [redirects , setRedirects] = useState(false);

  const handleClick = () => {
    setInventory(i => i - 1);
    console.log("here");
    setRedirects(true);
    console.log(inventory);
  }
  let jsx;
  if (redirects) {
    jsx = <Redirect to="/"/>;
  } else {
     jsx = (
    <div>
      <p>Some chips...</p>
      <button onClick={handleClick}></button>
      <Link exact to="/">Home</Link>
    </div>
    )
  }
  return (
      jsx
  );
};

export default Chips;