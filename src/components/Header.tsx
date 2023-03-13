import { useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { MdPlace } from "react-icons/md";

import * as S from '../styles/Header';

const Header = () => {
  return (
    <>
      <S.Header__BorderTop />
      <S.Header__Container>
        <S.Header__Top>
          <S.Header__Nav>
            <S.Header__Logo>MagaNets</S.Header__Logo> 
            <div>
              <MdPlace /> <span>Cidade: São Paulo</span>
            </div>
            <div className="nav__clickable">
              <BsTelephoneFill /> <span>Central de atendimento</span> 
            </div>
            <div className="nav__clickable">
              <BsHeartFill /> <span>Lista de desejos</span> 
            </div>
          </S.Header__Nav>
          
        </S.Header__Top>
      </S.Header__Container>
    </>
  );
};

export default Header;
