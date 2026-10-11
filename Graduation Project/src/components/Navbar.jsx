import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext.jsx";
import { useFavorites } from "../Context/FavoritesContext.jsx";

export default function Navbar() {
  const { totalItems } = useCart();
  const { count: favCount } = useFavorites();

  return (
    <nav style={{padding: '14px 30px', background: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', position: 'sticky', top: 0, zIndex: 100}}>
      <Link to="/" style={{fontWeight: '900', fontSize: '22px', color: '#3e2723', textDecoration: 'none'}}>☕ BrewHaven</Link>
      <div style={{display: 'flex', gap: '18px', alignItems: 'center'}}>
        <Link to="/" style={{textDecoration: 'none', color: '#5d4037', fontWeight: '600'}}>Home</Link>
        <Link to="/products" style={{textDecoration: 'none', color: '#5d4037', fontWeight: '600'}}>Menu</Link>
        <Link to="/favorites" style={{textDecoration: 'none', color: '#5d4037', fontWeight: '700', position: 'relative'}}>
          المفضلة  {favCount > 0 && <span style={{background: '#e53935', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '11px', marginLeft: '4px'}}>{favCount}</span>}
        </Link>
        <Link to="/cart" style={{textDecoration: 'none', background: '#3e2723', color: 'white', padding: '9px 18px', borderRadius: '20px', fontWeight: '800'}}>
          🛒 Cart ({totalItems})
        </Link>
      </div>
    </nav>
  );
}