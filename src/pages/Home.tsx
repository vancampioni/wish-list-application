import React, { useState } from "react";
import Product from "../components/Product";
import { ProductProps } from "../types/product";

import * as S from "../styles/Page";

const Home = () => {
  return (
    <>
      <S.Page__Container>
        <S.Page__Title>Home</S.Page__Title>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </S.Page__Container>
    </>
  );
};

export default Home;
