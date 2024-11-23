import React from 'react'
import { Navbar } from './Components/NavBar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LogInSignup from './Pages/LogInSignup';
import Hero from './Components/Hero/Hero';
import Footer from './Components/footer/footer';
import men_banner from './Components/assets/banner_mens.png'
import kid_banner from './Components/assets/banner_kids.png'
import women_banner from './Components/assets/banner_women.png'

const App = () => {

  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
      <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
      <Route path='/product/:productId' element={<Product />} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/Login' element={<LogInSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App