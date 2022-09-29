import "./App.css"
import React from "react"

import InventoryItem from "./InventoryItem"

function ProductInventory({inventoryDB, addToCart}) {
  return (
    <>
      {inventoryDB?.length ? (
        <div className="products">
          {inventoryDB.map((item) => (
            <InventoryItem item={item} key={item.name} addToCart={addToCart}/>
          ))}
        </div>
      ) : (
        <div>no data to show</div>
      )}
    </>
  );
}

export default ProductInventory
