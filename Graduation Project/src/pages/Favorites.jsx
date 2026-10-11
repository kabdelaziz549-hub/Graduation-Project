import { Link } from "react-router-dom";
import { useFavorites } from "../Context/FavoritesContext.jsx";
import { useCart } from "../Context/CartContext.jsx";

export default function Favorites() {
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();

  if (favorites.length === 0) {
    return (
      <div style={{padding: '100px 20px', textAlign: 'center', background: '#fdf8f3', minHeight: '80vh'}}>
        <div style={{fontSize: '70px'}}>💔</div>
        <h2 style={{color: '#3e2723'}}>المفضلة فاضية</h2>
        <p style={{color: '#8d6e63'}}>اضف قهوتك المفضلة من صفحة التفاصيل</p>
        <Link to="/products" style={{display: 'inline-block', marginTop: '20px', padding: '12px 25px', background: '#3e2723', color: 'white', borderRadius: '12px', textDecoration: 'none', fontWeight: '700'}}>روح للمنيو</Link>
      </div>
    );
  }

  return (
    <div style={{background: '#fdf8f3', minHeight: '100vh', padding: '40px 20px'}}>
      <div style={{maxWidth: '1300px', margin: '0 auto'}}>
        <h1 style={{fontSize: '36px', fontWeight: '900', color: '#3e2723'}}>المفضلة ❤️ ({favorites.length})</h1>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px', marginTop: '30px'}}>
          {favorites.map(p => (
            <div key={p.id} style={{background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.07)'}}>
              <div style={{height: '220px', overflow: 'hidden'}}>
                <img src={p.image} alt={p.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div style={{padding: '18px'}}>
                <h3 style={{margin: 0, color: '#3e2723'}}>{p.title} - {p.titleAr}</h3>
                <p style={{margin: '6px 0', color: '#8d6e63'}}>{p.price} EGP • {p.category}</p>
                <div style={{display: 'flex', gap: '10px', marginTop: '12px'}}>
                  <Link to={`/product/${p.id}`} style={{flex: 1, textAlign: 'center', padding: '10px', border: '1.5px solid #3e2723', borderRadius: '10px', textDecoration: 'none', color: '#3e2723', fontWeight: '700'}}>View</Link>
                  <button onClick={() => addToCart(p)} style={{flex: 1, padding: '10px', background: '#3e2723', color: 'white', border: 'none', borderRadius: '10px', fontWeight: '700', cursor: 'pointer'}}>Add to Cart</button>
                </div>
                <button onClick={() => removeFromFavorites(p.id)} style={{width: '100%', marginTop: '10px', padding: '9px', background: '#ffebee', border: 'none', borderRadius: '10px', color: '#c62828', cursor: 'pointer', fontWeight: '600'}}>حذف من المفضلة</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}