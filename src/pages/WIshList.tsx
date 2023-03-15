import React, { useState } from "react";
import Product from "../components/Product";
import { ProductProps } from "../types/product";

import * as S from "../styles/Page";
import Header from "../components/Header";
import Search from "../components/Search";

const WishList = () => {
  return (
    <>
      <Header />
      <Search />
      <S.Page__Container>
        <S.Page__Title>Home {">"} Lista de desejos</S.Page__Title>
        {/* <Product top_product="delete"/> */}
      </S.Page__Container>
    </>
  );
};

export default WishList;
