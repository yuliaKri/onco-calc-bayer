import "./App.css";
import React from "react";

function ShoppingCart({items}) {

  return (
    <div className="shopping-cart">
      <p>Shopping cart</p>
        {items?.map(el=><p key={Math.random()}>{el}</p>)}
    </div>
  );
}

export default ShoppingCart
