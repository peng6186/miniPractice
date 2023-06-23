import React from "react";

const ItemInCart = ({ item }) => {
  return (
    <div>
      <h4>Title: {item.title}</h4>
      <p>Description: {item.description}</p>
      <p>price: {item.price}</p>
      <p>quantity: {item.quantity}</p>
    </div>
  );
};

export default ItemInCart;
