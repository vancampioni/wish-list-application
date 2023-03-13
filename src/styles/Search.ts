import styled from "styled-components";

export const Search__Container = styled.div`
  display: flex;
  max-width: 100%;
  height: 70px;
  justify-content: flex-end;
  background-color: #5a2d82;
  padding-right: 95px;
  padding-left: 50px;

  input {
    width: 792px;
    height: 45px;
    border-radius: 0px 5px 5px 0px;
    border: none;
  }

  textarea:focus, input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export const Search__Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 45px;
  background-color: #fff;
  border-radius: 5px 0px 0px 5px;
  color: #5c5c5c;
  font-weight: bold;
  cursor: pointer;
`;
