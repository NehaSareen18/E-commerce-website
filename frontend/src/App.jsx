import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Placeorder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import Verify from './pages/Verify'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Collection' element={<Collection/>} />
        <Route path='/About' element={<About/>} />
        <Route path = '/Contact' element={<Contact/>}/>
        <Route path = '/Product/:productId' element={<Product/>}/>
        <Route path = '/Cart' element= {<Cart/>}/>
        <Route path = '/Login' element={<Login/>}/>
        <Route path = '/Place-order' element = {<Placeorder/>}/>
        <Route path ='/Orders' element={<Orders/>}/>
        <Route path ='/verify' element={<Verify/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App