import React, { useEffect, useLayoutEffect, useState } from "react";
import Product from "../components/Product";
import { ProductProps } from "../types/product";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import * as S from "../styles/Page";
import Header from "../components/Header";
import Search from "../components/Search";

const Home = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const searchProducts = products.filter((product => product.title.toLowerCase().includes(search.toLowerCase())));

  const loadProducts = async () => {
    await fetch(
      "https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e/0"
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Header />
      <Search setSearch={setSearch} search={search} />
      <S.Page__Container>
        <S.Page__Title>Home</S.Page__Title>
        {loading && (
          <Skeleton
            wrapper={S.Page__Skeleton}
            count={4}
            width={217}
            height={354}
            inline={true}
          />
        )}
        {searchProducts.map((p, index) => (
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
