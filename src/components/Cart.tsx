import { useEffect, useState } from "react";
import { useContext } from "react";
import { appContext } from "../App";
import ItemInCart from "./ItemInCart";

const Cart = () => {
  const { itemsInCart } = useContext(appContext);
  const [valSum, setValSum] = useState(0);
  const calTotalVal = () => {
    const sum = itemsInCart.reduce((acc, ele) => {
      return acc + ele.price * Number(ele.quantity);
    }, 0);
    setValSum(sum);
  };
  useEffect(() => {
    calTotalVal();
  }, [itemsInCart]);
  return (
    <div>
      <h2>Cart Page</h2>
      <h3>
        There {itemsInCart.length == 1 ? "is " : "are "} {itemsInCart.length}{" "}
        {itemsInCart.length == 1 ? "item" : "items"} in your Cart
      </h3>
      <h3>Total Value: {valSum}</h3>
      <hr />
      {itemsInCart.map((itemInCart) => {
        return <ItemInCart item={itemInCart} key={itemInCart.id} />;
      })}
    </div>
  );
};

export default Cart;
