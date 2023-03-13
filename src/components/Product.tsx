import { BsSuitHeartFill } from "react-icons/bs";
import { CiCircleRemove } from 'react-icons/ci'

import * as S from "../styles/Product";

const Product = () => {
  return (
    <>
      <S.Product__Container__Fav>
        <div className="product__container__fav__top">
            <BsSuitHeartFill className="product__fav__icon"  />
        </div>
        <div className="product__container__fav__bottom" />
      </S.Product__Container__Fav>
      <S.Product__Container__Removal>
        <CiCircleRemove />
      </S.Product__Container__Removal>
      <S.Product_Container>
        <S.Product__Image />
        <S.Product__Title>Produto de bebê</S.Product__Title>
        <S.Product__Price>R$ 20,00</S.Product__Price>
      </S.Product_Container>
    </>
  );
};

export default Product;
