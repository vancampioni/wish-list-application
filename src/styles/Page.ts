import { border } from "./../../node_modules/@mui/system/index.d";
import styled from "styled-components";

export const Page__Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Page__Title__Home = styled.span`
  display: flex;
  flex-direction: column;
  width: 98%;
  font-weight: bold;
  margin: 20px 20px 20px 50px;
  cursor: pointer;

  &:hover {
    color: #5c5c5c;
  }
`;

export const Page__Title__WishList = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  font-weight: bold;
  margin: 21px 24px 20px 210px;
  position: absolute;
`;

export const Page__Skeleton = styled.span`
  margin: 45px 60px 60px 60px;
`;
