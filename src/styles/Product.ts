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

export const Product__Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 135px;
  height: 170px;
  border: 1px solid #d1d1d1;
  border-radius: 4.5px;
  margin-top: -20px;
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
