import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty, totalPrice, totalItems } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div style={{padding: '100px 20px', textAlign: 'center', background: '#fdf8f3', minHeight: '80vh'}}>
        <div style={{fontSize: '80px'}}>🛒</div>
        <h2 style={{color: '#3e2723'}}>السلة فاضية</h2>
        <p style={{color: '#8d6e63'}}>روح اختار قهوتك المفضلة من المنيو</p>
      </div>
    );
  }

  return (
    <div style={{background: '#fdf8f3', minHeight: '100vh', padding: '40px 20px'}}>
      <div style={{maxWidth: '900px', margin: '0 auto'}}>
        <h1 style={{fontSize: '36px', fontWeight: '800', color: '#3e2723'}}>سلة المشتريات ({totalItems})</h1>
        
        <div style={{marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
          {cart.map(item => (
            <div key={item.id} style={{
              background: 'white',
              borderRadius: '18px',
              padding: '20px',
              display: 'flex',
              gap: '20px',
              alignItems: 'center',
              boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
              transition: '0.3s'
            }}>
              <img src={item.image} style={{width: '90px', height: '90px', borderRadius: '14px', objectFit: 'cover'}} alt={item.title} />
              
              <div style={{flex: 1}}>
                <h3 style={{margin: 0, color: '#3e2723'}}>{item.title} - {item.titleAr}</h3>
                <p style={{margin: '4px 0', color: '#8d6e63', fontSize: '14px'}}>{item.price} EGP للواحدة</p>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginTop: '10px'}}>
                  <button onClick={() => decreaseQty(item.id)} style={{width: '34px', height: '34px', borderRadius: '50%', border: '1px solid #d7ccc8', background: 'white', cursor: 'pointer', fontWeight: '700'}}>−</button>
                  <span style={{fontWeight: '800', minWidth: '20px', textAlign: 'center'}}>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)} style={{width: '34px', height: '34px', borderRadius: '50%', border: 'none', background: '#3e2723', color: 'white', cursor: 'pointer', fontWeight: '700'}}>+</button>
                  <span style={{marginLeft: '15px', fontWeight: '800', color: '#3e2723'}}>الإجمالي: {(item.price * item.quantity).toFixed(2)} EGP</span>
                </div>
              </div>

              <button onClick={() => removeFromCart(item.id)} style={{background: '#ffebee', border: 'none', padding: '10px 14px', borderRadius: '10px', cursor: 'pointer', color: '#c62828'}}>حذف</button>
            </div>
          ))}
        </div>

        <div style={{background: 'white', borderRadius: '18px', padding: '25px', marginTop: '30px', boxShadow: '0 8px 20px rgba(0,0,0,0.06)'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '22px', fontWeight: '800', color: '#3e2723'}}>
            <span>المجموع الكلي:</span>
            <span>{totalPrice} EGP</span>
          </div>
          <button style={{width: '100%', marginTop: '20px', padding: '16px', background: '#3e2723', color: 'white', border: 'none', borderRadius: '14px', fontWeight: '800', fontSize: '18px', cursor: 'pointer'}}>
            إتمام الطلب - Checkout
          </button>
        </div>
      </div>
    </div>
  );
}