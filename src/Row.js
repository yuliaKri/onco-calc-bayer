import "./App.css";
import React from "react";

function InventoryItem({ item, removeItem }) {

    return (
        <div className="table-row">
            <p>Date: {item.date}</p>
            <p>PSA: {item.psa}</p>
            <div
                className="inventory-item-image-box"
               // style={{ backgroundImage: `url(${item.image}` }}
            />
            <button
                className="btn"
                onClick={() => removeItem(item.id)}
            >

                remove
            </button>
            <br/>
        </div>
    );
}


export default InventoryItem;
