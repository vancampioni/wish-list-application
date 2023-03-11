import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Header from './components/Header'

const App = () => {
  const [product, setProduct] = useState(null)

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
