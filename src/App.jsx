import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layouts/Header'
import Home from './pages/Home'
import Footer from './layouts/Footer'
import AboutDetails from './pages/AboutDetails'
import Contact from './pages/Contact'
import NFTs from './pages/NFTs'
import Team from './pages/Team'
import Login from './pages/Login'
import Register from './pages/Register'
import ScrollToTop from './layouts/ScrollToTop'
import ProductDetails from './components/ProductDetails'
import Account from './pages/Account'
import Dashboard from './pages/dashboard/Dashboard'
import AddProduct from './pages/dashboard/AddProduct'
import EditProduct from './pages/dashboard/EditProduct'
import Wishlist from './components/Wishlist'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import SuccesPayment from './pages/SuccesPayment'
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<AboutDetails />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/nfts' element={<NFTs />}></Route>
        <Route path='/team' element={<Team />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path="/nfts/:slug" element={<ProductDetails />}></Route>
        <Route path='/account' element={<Account />}></Route>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path='/checkout' element={<CheckOut />}></Route>
        <Route path='/completedPayment' element={<SuccesPayment />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/dashboard/add' element={<AddProduct />}></Route>
        <Route path="/dashboard/edit/:slug" element={<EditProduct />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App