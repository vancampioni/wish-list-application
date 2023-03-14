import { ProductProps } from "../types/product";

import { BsSuitHeartFill } from "react-icons/bs";
import { CiCircleRemove } from "react-icons/ci";

import * as S from "../styles/Product";
import DeleteFavoriteProduct from "./DeleteFavoriteProduct";
import AddFavoriteProduct from "./AddFavoriteProduct";

const Product = ({ top_product }: ProductProps) => {
  return (
    <>
      <S.Product_Container>
        {top_product === 'favorite' && <AddFavoriteProduct />}
        {top_product === 'delete' && <DeleteFavoriteProduct />}
        <S.Product__Image />
        <S.Product__Title>Produto de bebê</S.Product__Title>
        <S.Product__Price>R$ 20,00</S.Product__Price>
      </S.Product_Container>
    </>
  );
};

export default Product;
