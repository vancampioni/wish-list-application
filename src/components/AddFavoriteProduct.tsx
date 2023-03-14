import { BsSuitHeartFill } from "react-icons/bs";

import * as S from "../styles/AddFavoriteProduct";

const DeleteFavoriteProduct = () => {
  return (
    <>
      <S.AddFavoriteProduct__Container>
          <div className="product__container__fav__top">
            <BsSuitHeartFill className="product__icon__fav" />
          </div>
          <div className="product__container__fav__bottom" />
        </S.AddFavoriteProduct__Container>
    </>
  );
};

export default DeleteFavoriteProduct;
