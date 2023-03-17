import React, { useEffect, useLayoutEffect, useState } from "react";
import Product from "../components/Product";
import { ProductProps } from "../types/product";

import * as S from "../styles/Page";
import Header from "../components/Header";
import Search from "../components/Search";
import Skeleton from "react-loading-skeleton";

const WishList = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [wishListProducts, setWishListProducts] = useState<ProductProps[]>([]);

  const addProductToWishList = (id: number) => {
    // const verify = wishList.filter((p) => p.id === id);
    // if (verify.length === 0) {
    //   setWishList((prevState) => [
    //     ...prevState,
    //     ...products.filter((product) => product.id === id),
    //   ]);
    // } else {
    //   setWishList(wishList.filter((p) => p.id !== id))
    // }
  };

  const productStr: any = localStorage.getItem("products");
  const localStorageProducts = JSON.parse(productStr)  
  
  
  const removeProductToTheWishList = (id: number) => {
    setWishListProducts(
      wishListProducts.filter((product: any) => product.id !== id)
    );
  };

  const searchProducts = wishListProducts.filter((product: any) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

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

  useLayoutEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    setWishListProducts(localStorageProducts)
    console.log(wishListProducts)
  }, []);



  return (
    <>
      <Header />
      <Search setSearch={setSearch} search={search} />
      <S.Page__Container>
        <S.Page__Title__Home> Home </S.Page__Title__Home>
        <S.Page__Title__WishList>{">"} Lista de desejos</S.Page__Title__WishList>
        {loading && (
          <Skeleton
            wrapper={S.Page__Skeleton}
            count={4}
            width={217}
            height={354}
            inline={true}
          />
        )}
        {searchProducts.map((p: any) => (
          <Product
            key={p.id}
            id={p.id}
            image_url={p.image_url}
            title={p.title}
            price={p.price}
            top_product="delete"
            addProductToWishList={addProductToWishList}
            removeProductToTheWishList={removeProductToTheWishList}
          />
        ))}
      </S.Page__Container>
    </>
  );
};

export default WishList;
