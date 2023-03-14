import { CiCircleRemove } from "react-icons/ci";

import * as S from "../styles/DeleteFavoriteProduct";

const DeleteFavoriteProduct = () => {
  return (
    <>
      <S.DeleteFavoriteProduct__Container>
          <CiCircleRemove className="product__icon_delete"/>
        </S.DeleteFavoriteProduct__Container>
    </>
  );
};

export default DeleteFavoriteProduct;
