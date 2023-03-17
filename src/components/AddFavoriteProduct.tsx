import { BsSuitHeartFill } from "react-icons/bs";

import * as S from "../styles/AddFavoriteProduct";
import { FavoriteProductProps } from "../types/favoriteProduct";

const AddFavoriteProduct = ({
  addProductToWishList,
  id,
}: FavoriteProductProps) => {

  return (
    <>
      <S.AddFavoriteProduct__Container>
        <div className="product__container__fav__top">
          <BsSuitHeartFill
            className="product__icon__fav"
            onClick={() => addProductToWishList(id)}
          />
        </div>
        <div className="product__container__fav__bottom" />
      </S.AddFavoriteProduct__Container>
    </>
  );
};

export default AddFavoriteProduct;
