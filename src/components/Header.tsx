import { useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { MdPlace } from "react-icons/md";

import * as S from '../styles/Header';

const Header = () => {
  return (
    <>
      <S.TopBorder />
      <S.Container>
        <S.TopHeader>
          <S.HeaderNav>
            <S.Brand>MagaNets</S.Brand> 
            <div>
              <MdPlace /> <span>Cidade: São Paulo</span>
            </div>
            <div className="clickable">
              <BsTelephoneFill /> <span>Central de atendimento</span> 
            </div>
            <div className="clickable">
              <BsHeartFill /> <span>Lista de desejos</span> 
            </div>
          </S.HeaderNav>
          
        </S.TopHeader>
      </S.Container>
      {/* <div className={classes.topHeader}></div>
      <div className={classes.container}>
        <div className={classes.brand}>MagaNets</div>
        <div>
          <span><MdOutlinePlace /></span>
          <span>Cidade: São Paulo</span>
          
            <span><BsTelephoneFill /></span>
            <span>Central de atendimento</span>
          
        </div>
      </div> */}
      {/* <div className={classes.container}>
        <div>

        </div>
        <div>
          <span>MagaNets</span>
        
        
          <span><MdOutlinePlace /></span>
          <span>Cidade: São Paulo</span>
        
        
          <span><BsTelephoneFill /></span>
          <span>Central de atendimento</span>
        
        
          <span> <BsHeartFill /> </span>
          <span>Lista de desejos</span>
        </div>
      </div> */}
    </>
  );
};

export default Header;
