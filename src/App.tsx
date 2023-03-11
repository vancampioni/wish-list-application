import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ProductProps } from '../src/types/product'

import Header from './components/Header'
import Search from './components/Search'

const App = () => {
  const [product, setProduct] = useState<ProductProps | null>(null)

  const loadProducts = async() => {
    const response = await fetch(`https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e`) 
    const data = await response.json()
    console.log(data)
  }

  <button onClick={loadProducts}>Chamar</button>

  return (
    <>
      <Header />
      <Search />
      <Outlet />
    </>
  )
}

export default App
