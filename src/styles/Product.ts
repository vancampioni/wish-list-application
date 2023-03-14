import styled from "styled-components";

export const Product_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 225px;
  height: 345px;
  border: 1px solid #d1d1d1;
  border-radius: 4.5px;
  margin: 15px 30px 30px 30px;
`;

export const Product__Container__Fav = styled.div`
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
    border-radius: 3px 3px 0 0 ;
  }

  .product__icon__fav {
    color: #fff;
    font-size: 18px;
    cursor: pointer;
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

export const Product__Container__Delete = styled.div`
  display: flex;
  position: absolute;
  justify-content: flex-end;
  align-items: flex-start;
  width: 217.5px;
  height: 337.5px;
  
  .product__icon_delete {
    font-size: 30px;
    cursor: pointer;
  }
`

export const Product__Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 135px;
  height: 170px;
  border: 1px solid #d1d1d1;
  border-radius: 4.5px;
  margin-top: -40px;
`;

export const Product__Title = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 21px;
  text-align: center;
  color: #242424;
  margin-top: 5px;
`;

export const Product__Price = styled.div`
  display: flex;
  color: #e4ce46;
  font-weight: bold;
  font-size: 21px;
  text-align: center;
  margin-top: 45px;
`;
