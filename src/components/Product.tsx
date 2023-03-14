import { BsSuitHeartFill } from "react-icons/bs";
import { CiCircleRemove } from "react-icons/ci";

import * as S from "../styles/Product";

const Product = () => {
  return (
    <>
      <S.Product_Container>
        <S.Product__Container__Fav>
          <div className="product__container__fav__top">
            <BsSuitHeartFill className="product__icon__fav" />
          </div>
          <div className="product__container__fav__bottom" />
        </S.Product__Container__Fav>
        <S.Product__Container__Delete>
          <CiCircleRemove className="product__icon_delete"/>
        </S.Product__Container__Delete>
        <S.Product__Image />
        <S.Product__Title>Produto de bebê</S.Product__Title>
        <S.Product__Price>R$ 20,00</S.Product__Price>
      </S.Product_Container>
    </>
  );
};

export default Product;
