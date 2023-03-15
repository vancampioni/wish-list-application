import React, { useEffect, useLayoutEffect, useState } from "react";
import Product from "../components/Product";
import { ProductProps } from "../types/product";
import Skeleton from "react-loading-skeleton";

import * as S from "../styles/Page";

const Home = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(false);

  const loadProducts = (() => {
   fetch("https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e/0")
   .then(response => response.json())
   .then(data => {
     setProducts(data.products)
   })
  })


  useLayoutEffect(() => {
   loadProducts()
  }, []);

  return (
    <>
      <S.Page__Container>
        <S.Page__Title>Home</S.Page__Title>
          {products.map((p, index) => (
            <Product 
              key={index} 
              top_product="favorite" 
              image_url={p.image_url} 
              title={p.title} 
              price={p.price} 
            />
          ))}
      </S.Page__Container>
    </>
  );
};

export default Home;
