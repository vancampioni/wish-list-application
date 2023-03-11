import { useState } from 'react'
import { BsHeartFill } from 'react-icons/bs'
import { BsTelephoneFill } from 'react-icons/bs'
import { MdOutlinePlace } from 'react-icons/md'

const Header = () => {

  return (
    <>
      <div>
        <div>
          <h1>MagaNets</h1>
        </div>
        <div>
          <div><MdOutlinePlace /></div>
          <p>Cidade: São Paulo</p>
        </div>
        <div>
          <div><BsTelephoneFill /></div>
          <div>Central de atendimento</div>
        </div>
        <div>
          <div> <BsHeartFill /> </div>
          <p>Lista de desejos</p>
        </div>
      </div>
      
    </>
  )
}

export default Header
