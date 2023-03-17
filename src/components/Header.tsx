import { useState } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { MdPlace } from "react-icons/md";
import { Link } from "react-router-dom";

import * as S from "../styles/Header";

const Header = () => {
  return (
    <>
      <S.Header__BorderTop />
      <S.Header__Container>
        <S.Header__Top>
          <S.Header__Nav>
            <Link to="/">
              <S.Header__Logo>MagaNets</S.Header__Logo>
            </Link>
            <div>
              <MdPlace /> <span>Cidade: São Paulo</span>
            </div>
            <div className="nav__clickable">
              <BsTelephoneFill /> <span>Central de atendimento</span>
            </div>
            <Link to="/wish-list">
              <div className="nav__clickable">
                <BsSuitHeartFill /> <span>Lista de desejo</span>
              </div>
            </Link>
          </S.Header__Nav>
        </S.Header__Top>
      </S.Header__Container>


    </>
  );
};

export default Header;
