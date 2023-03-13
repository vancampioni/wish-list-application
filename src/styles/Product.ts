import styled from "styled-components";

export const Product_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 10%;
  width: auto;
  height: 200px;
  border: 1px solid #d1d1d1;
  border-radius: 3px;
  margin: 10px;
`;

export const Product__Container__Fav = styled.div`
  display: flex;
  .product__container__fav__top {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 20px;
    height: 25px;
    margin-left: 13px;
    margin-top: 7px;
    background-color: #000;
    border-radius: 5px 5px 0 0 ;
  }

  .product__fav__icon {
    display: flex;
    color: #fff;
    font-size: 12px;
    cursor: pointer;
  }

  .product__container__fav__bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 20px;
    height: 12px;
    margin-left: 13px;
    margin-top: 32px;
    border-left: 9px solid transparent;
    border-right: 10px solid transparent;
    border-top: 7px solid #000;
  }
`;

export const Product__Container__Removal = styled.div`
  display: flex;
  position: absolute;
  justify-content: flex-end;
  align-items: flex-end;
  max-width: 10.5%;
  width: 100%;
  height: 30px;
`

export const Product__Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 60%;
  width: 100%;
  height: 80px;
  border: 1px solid #d1d1d1;
  border-radius: 3px;
  margin-top: -30px;
`;

export const Product__Title = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  color: #242424;
  margin-top: 5px;
`;

export const Product__Price = styled.div`
  display: flex;
  color: #e4ce46;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  margin-top: 30px;
`;
