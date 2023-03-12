import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ProductProps } from '../src/types/product'
import classes from './styles/App.module.css'

import Header from './components/Header'
import Search from './components/Search'

const App = () => {  

  return (
    <>
    <div className={classes.app}>
      <Header />
    </div>
    </>
  )
}

export default App
