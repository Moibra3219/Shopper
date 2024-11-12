import React from 'react'
import { Navbar } from './Components/NavBar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LogInSignup from './Pages/LogInSignup';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';

const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Shop/>
      <Routes>
      <Route path='/' elemnet={<Shop/>}/>
      <Route path='/men' elemnet={<ShopCategory category="men"/>}/>
      <Route path='/women' elemnet={<ShopCategory category="women"/>}/>
      <Route path='/kids' elemnet={<ShopCategory category="kids"/>}/>
      <Route path='/product' elemnet={<Product/>}/>
      <Route path=':productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/Login' element={<LogInSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
