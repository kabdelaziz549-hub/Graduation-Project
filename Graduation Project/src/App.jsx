import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Products from './pages/Products.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Cart from './pages/Cart.jsx'
import Favorites from './pages/Favorites.jsx'

function Home() {
  return (
    <div style={{padding: '100px 20px', textAlign: 'center', background: '#fdf8f3', minHeight: '80vh'}}>
      <h1 style={{fontSize: '50px', fontWeight: '900', color: '#3e2723'}}>Welcome to BrewHaven ☕</h1>
      <p style={{fontSize: '20px', color: '#8d6e63'}}>أفضل 30 نوع قهوة بصورها الحقيقية</p>
      <a href="/products" style={{display: 'inline-block', marginTop: '30px', padding: '14px 30px', background: '#3e2723', color: 'white', borderRadius: '12px', textDecoration: 'none', fontWeight: '800', fontSize: '18px'}}>شوف المنيو</a>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  )
}