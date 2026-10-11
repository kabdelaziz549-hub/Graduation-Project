import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../services/api";
import { useCart } from "../Context/CartContext.jsx";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All");
  const { addToCart } = useCart();
  const categories = ["All", "Espresso", "Latte", "Cold Brew", "Traditional", "Specialty"];

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const filtered = filter === "All" ? products : products.filter(p => p.category === filter);

  return (
    <div style={{padding: '40px 20px', background: '#fdf8f3', minHeight: '100vh'}}>
      <style>{`
        .coffee-card { transition: all 0.4s ease; animation: fadeIn 0.5s ease forwards; }
        @keyframes fadeIn { from {opacity:0; transform: translateY(15px);} to {opacity:1; transform: translateY(0);} }
        .coffee-card:hover { transform: translateY(-8px); box-shadow: 0 18px 40px rgba(62,39,35,0.15) !important; }
        .coffee-card img { transition: transform 0.7s ease; }
        .coffee-card:hover img { transform: scale(1.1); }
      `}</style>

      <div style={{maxWidth: '1300px', margin: '0 auto'}}>
        <h1 style={{fontSize: '42px', fontWeight: '900', color: '#3e2723'}}>Menu - {products.length} نوع قهوة بصورها الحقيقية</h1>
        <p style={{color: '#8d6e63', marginBottom: '25px'}}>كل صورة مطابقة لنوع القهوة بالظبط - {filtered.length} منتج ظاهر</p>

        <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px'}}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              style={{padding: '9px 20px', borderRadius: '25px', border: filter===cat?'none':'1px solid #d7ccc8', background: filter===cat?'#3e2723':'white', color: filter===cat?'white':'#5d4037', cursor: 'pointer', fontWeight: '700'}}>
              {cat}
            </button>
          ))}
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '28px'}}>
          {filtered.map((p,i) => (
            <div key={p.id} className="coffee-card" style={{background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.07)', opacity: 0, animationDelay: `${i*0.04}s`}}>
              <div style={{height: '260px', overflow: 'hidden', position: 'relative'}}>
                <img src={p.image} alt={p.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} loading="lazy" />
                <div style={{position: 'absolute', top: '12px', left: '12px', background: 'white', padding: '5px 12px', borderRadius: '15px', fontWeight: '800', fontSize: '13px'}}>{p.titleAr}</div>
                <div style={{position: 'absolute', top: '12px', right: '12px', background: '#3e2723', color: 'white', padding: '6px 14px', borderRadius: '20px', fontWeight: '800'}}>{p.price} EGP</div>
              </div>
              <div style={{padding: '18px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <h3 style={{margin: 0, fontSize: '19px', fontWeight: '800', color: '#3e2723'}}>{p.title}</h3>
                  <span style={{fontSize: '11px', background: '#efebe9', padding: '4px 10px', borderRadius: '10px', color: '#6d4c41', fontWeight: '700'}}>{p.roast}</span>
                </div>
                <p style={{margin: '6px 0 14px', color: '#8d6e63', fontSize: '13px', height: '32px', overflow: 'hidden'}}>{p.description}</p>
                <div style={{display: 'flex', gap: '10px'}}>
                  <Link to={`/product/${p.id}`} style={{flex: 1, textAlign: 'center', padding: '12px', background: '#fff', border: '1.5px solid #3e2723', color: '#3e2723', borderRadius: '12px', textDecoration: 'none', fontWeight: '800'}}>View 👁️</Link>
                  <button onClick={() => addToCart(p)} style={{flex: 1, padding: '12px', background: '#3e2723', color: 'white', border: 'none', borderRadius: '12px', fontWeight: '800', cursor: 'pointer'}}>Add to Cart 🛒</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}