import "./App.css";
import React from "react";
import PropTypes from "prop-types";

function InventoryItem({ item, addToCart }) {
    return (
    <div className="inventory-item">
      <p>{item.name}</p>
      <p>{item.price}</p>
      <div
        className="inventory-item-image-box"
        style={{ backgroundImage: `url(${item.image}` }}
      />
      <button
        className="btn"
        onClick={() => {
            addToCart(item.name);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}

InventoryItem.propTypes = {
  addToCart: PropTypes.func,
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  }),
};

export default InventoryItem;
