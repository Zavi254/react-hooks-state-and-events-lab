import React, { useState } from "react";

function Item({ name, category }) {

  const [itemClass, setItem] = useState(false)

  const addToCart = () => setItem(!itemClass);

  return (
    <li className={itemClass ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
