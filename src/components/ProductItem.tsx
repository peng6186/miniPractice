import { useState, useContext } from "react";
import { appContext, Item } from "../App";
import { produce } from "immer";

const ProductItem = ({ product }) => {
  const [itemCount, setItemCount] = useState<number>(0);
  const { itemsInCart, SetItemsInCart } = useContext(appContext);
  const handleAddToCart = () => {
    console.log("click Add");
    const resIdx = itemsInCart.findIndex((item) => {
      return item.id === product.id;
    });
    console.log("resIdx", resIdx);

    if (resIdx === -1) {
      SetItemsInCart([...itemsInCart, { ...product, quantity: itemCount }]);
    } else {
      SetItemsInCart(
        produce((draft) => {
          draft[resIdx].quantity =
            Number(itemCount) + Number(draft[resIdx].quantity);
        })
      );
    }
    console.log(itemsInCart);
  };
  return (
    <div key={product.id}>
      <h4>Title: {product.title}</h4>
      <p>Description: {product.description}</p>
      <p>price: {product.price}</p>
      <input
        type="number"
        placeholder="how many you want"
        onChange={(e) => setItemCount(e.target.value)}
      />
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default ProductItem;
