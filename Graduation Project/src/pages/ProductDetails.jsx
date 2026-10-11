import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../services/api";
import { useCart } from "../Context/CartContext.jsx";
import { useFavorites } from "../Context/FavoritesContext.jsx";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  useEffect(() => {
    getProductById(id).then(p => {
      setProduct(p);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <div style={{padding: '100px', textAlign: 'center', fontSize: '20px'}}>☕ جاري تحميل القهوة...</div>;
  if (!product) return <div style={{padding: '100px', textAlign: 'center'}}>المنتج مش موجود <Link to="/products">ارجع للمنيو</Link></div>;

  const fav = isFavorite(product.id);

  return (
    <div style={{background: '#fdf8f3', minHeight: '100vh', padding: '30px 20px'}}>
      <div style={{maxWidth: '1100px', margin: '0 auto', background: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)', display: 'flex', flexWrap: 'wrap'}}>
        <div style={{flex: '1 1 500px', height: '600px'}}>
          <img src={product.image} alt={product.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
        <div style={{flex: '1 1 400px', padding: '35px'}}>
          <Link to="/products" style={{textDecoration: 'none', color: '#8d6e63', fontWeight: '600'}}>← رجوع للمنيو</Link>
          <div style={{marginTop: '15px'}}>
            <span style={{background: '#efebe9', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '700'}}>{product.category} • {product.roast}</span>
          </div>
          <h1 style={{fontSize: '36px', fontWeight: '900', color: '#3e2723', margin: '15px 0 5px'}}>{product.title}</h1>
          <h2 style={{fontSize: '20px', color: '#8d6e63', fontWeight: '400', marginBottom: '15px'}}>{product.titleAr} - {product.origin}</h2>
          <p style={{fontSize: '30px', fontWeight: '900', color: '#3e2723', margin: 0}}>{product.price} EGP</p>
          <p style={{color: '#6d4c41', lineHeight: '1.8', margin: '20px 0', fontSize: '16px'}}>{product.description} - محضرة من حبوب أرابيكا 100% محمصة طازجة يوميا في BrewHaven.</p>

          <div style={{background: '#fff8f0', borderRadius: '16px', padding: '20px', margin: '20px 0'}}>
            <h3 style={{margin: '0 0 12px', color: '#3e2723', fontSize: '18px'}}>📋 المكونات:</h3>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              {product.ingredients.map((ing, i) => (
                <li key={i} style={{padding: '9px 0', borderBottom: i < product.ingredients.length-1 ? '1px solid #f0e6dd' : 'none', display: 'flex', gap: '10px', alignItems: 'center'}}>
                  <span style={{width: '8px', height: '8px', background: '#8d6e63', borderRadius: '50%'}}></span>
                  <span style={{color: '#4e342e', fontWeight: '500'}}>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
            <button onClick={() => addToCart(product)} style={{flex: '1 1 200px', padding: '16px', background: '#3e2723', color: 'white', border: 'none', borderRadius: '14px', fontWeight: '800', fontSize: '16px', cursor: 'pointer'}}>
              إضافة للسلة 🛒 - {product.price} EGP
            </button>
            <button onClick={() => fav ? removeFromFavorites(product.id) : addToFavorites(product)}
              style={{flex: '1 1 160px', padding: '16px', background: fav ? '#ffebee' : 'white', color: fav ? '#c62828' : '#3e2723', border: fav ? '1.5px solid #ffcdd2' : '1.5px solid #3e2723', borderRadius: '14px', fontWeight: '800', fontSize: '16px', cursor: 'pointer'}}>
              {fav ? '❤️ في المفضلة' : '🤍 إضافة للمفضلة'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}