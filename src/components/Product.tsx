import { ProductProps } from "../types/product";

import * as S from "../styles/Product";
import DeleteFavoriteProduct from "./DeleteFavoriteProduct";
import AddFavoriteProduct from "./AddFavoriteProduct";

const Product = ({ top_product, image_url, title, price, id, addProductToWishList, removeProductToTheWishList }: ProductProps) => {
  return (
    <>
      <S.Product_Container>
        {top_product === 'favorite' && <AddFavoriteProduct addProductToWishList={addProductToWishList} id={id}/>}
        {top_product === 'delete' && <DeleteFavoriteProduct removeProductToTheWishList={removeProductToTheWishList} id={id}/>}
        <S.Product__Image>{image_url}</S.Product__Image>
        <S.Product__Title>{ title }</S.Product__Title>
        <S.Product__Price>R$ { price }</S.Product__Price>
      </S.Product_Container>
    </>
  );
};

export default Product;
