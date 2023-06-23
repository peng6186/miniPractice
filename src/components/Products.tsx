import { useEffect, useState } from "react";
import axios from "../../node_modules/axios/index";
import ProductItem from "./ProductItem";

interface Product {
  id: number;
  price: number;
  title: string;
  description: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const fetchData = async () => {
    const resp = await axios.get("https://fakestoreapi.com/products?limit=10");
    console.log(resp.data);
    const myArr = resp.data.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price,
    }));
    console.log(myArr);
    setProducts([...myArr]);
  };
  //   fetchData();
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2>Products Page</h2>

      {products?.map((product: Product) => {
        return <ProductItem product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Products;
