import React, { useEffect, useLayoutEffect, useState } from "react";
import Product from "../components/Product";
import { ProductProps } from "../types/product";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import * as S from "../styles/Page";
import Header from "../components/Header";
import Search from "../components/Search";
import { HomeProps } from "../types/home";

const Home = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const localStorageProducts: any = localStorage.getItem('products')
  const [wishList, setWishList] = useState<ProductProps[]>([JSON.parse(localStorageProducts)]);

  const addProductToWishList = (id: number) => {
    try {

      const verify = wishList.filter((p) => p.id === id);
      if (verify.length === 0) {
        setWishList((prevState) => [
          ...prevState,
          ...products.filter((product) => product.id === id),
        ]);
      } else {
        setWishList(wishList.filter((p) => p.id !== id));
      }
    } catch(err) {
      throw err
    }
  };

  const searchProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const loadProducts = async () => {
    try {
      await fetch(
        "https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e/0"
      )
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.products);
          setLoading(false);
        });
    } catch (err) {
      throw err;
    }
  };

  
  useEffect(() => {
    if(localStorageProducts !== null) {
      setWishList(JSON.parse(localStorageProducts))
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(wishList));
  }, [wishList]);
  
  useLayoutEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Header />
      <Search setSearch={setSearch} search={search} />
      <S.Page__Container>
        <S.Page__Title__Home>Home</S.Page__Title__Home>
        {loading && (
          <Skeleton
            wrapper={S.Page__Skeleton}
            count={4}
            width={217}
            height={354}
            inline={true}
          />
        )}
        {searchProducts.map((p) => (
          <Product
            key={p.id}
            id={p.id}
            image_url={p.image_url}
            title={p.title}
            price={p.price}
            top_product="favorite"
            addProductToWishList={addProductToWishList}
          />
        ))}
      </S.Page__Container>
    </>
  );
};

export default Home;
