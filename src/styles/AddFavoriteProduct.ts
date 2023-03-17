import styled from "styled-components";

export const AddFavoriteProduct__Container = styled.div`
  display: flex;
  width: 217.5px;
  height: 354px;
  position: absolute;
  .product__container__fav__top {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 30px;
    height: 37.5px;
    background-color: #000;
    border-radius: 3px 3px 0 0;
  }
  .product__icon__fav {
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    &:active {
      color: red;
    }
  }

  .product__container__fav__bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 30px;
    height: 18px;
    margin-top: 37.5px;
    border-left: 13.5px solid transparent;
    border-right: 15px solid transparent;
    border-top: 10.5px solid #000;
  }
`;
