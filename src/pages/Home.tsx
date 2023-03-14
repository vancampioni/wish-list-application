import React, { useState } from "react";
import Product from "../components/Product";
import { ProductProps } from "../types/product";

import * as S from "../styles/Home";

const Home = () => {
  return (
    <>
      <S.Home__Container>
        <S.Home__Title>Home</S.Home__Title>
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
      </S.Home__Container>
    </>
  );
};

export default Home;
