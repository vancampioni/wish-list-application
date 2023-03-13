import styled from "styled-components";

export const Header__BorderTop = styled.div`
  height: 7px;
  background-color: #371052;
`;

export const Header__Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 100%;
  height: 70px;
  background-color: #5a2d82;
  color: #fff;
`;
export const Header__Top = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const Header__Nav = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  font-weight: bold;
  font-size: 13px;

  .nav__clickable {
    cursor: pointer;
  }

  span {
    margin-left: 7px;
  }
`;

export const Header__Logo = styled.div`
  display: flex;
  font-size: 25px;
  align-items: flex-start;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  cursor: pointer;
`;

