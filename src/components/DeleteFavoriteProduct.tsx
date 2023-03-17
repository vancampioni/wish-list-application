import { CiCircleRemove } from "react-icons/ci";

import * as S from "../styles/DeleteFavoriteProduct";
import { DeleteProductProps } from "../types/deleteProduct";

const DeleteFavoriteProduct = ({
  removeProductToTheWishList,
  id,
}: DeleteProductProps) => {
  return (
    <>
      <S.DeleteFavoriteProduct__Container>
        <CiCircleRemove
          className="product__icon_delete"
          onClick={() => removeProductToTheWishList(id)}
        />
      </S.DeleteFavoriteProduct__Container>
    </>
  );
};

export default DeleteFavoriteProduct;
