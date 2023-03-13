import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ProductProps } from '../src/types/product'
import * as S from '../src/styles/App';

import Header from './components/Header'
import Search from './components/Search'

const App = () => {  

  return (
    <>
    <S.App>
      <Header />
      <Search />
      <Outlet />
    </S.App>
    </>
  )
}

export default App
