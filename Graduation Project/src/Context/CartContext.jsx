import { createContext, useState, useEffect, useContext } from "react";

export const CartContext = createContext();
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("brewHavenCart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("brewHavenCart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => String(item.id) === String(product.id));
      if (existing) {
        return prev.map(item =>
          String(item.id) === String(product.id)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => String(item.id) !== String(id)));
  };

  const increaseQty = (id) => {
    setCart(prev => prev.map(item =>
      String(item.id) === String(id) ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (String(item.id) === String(id)) {
            if (item.quantity === 1) return null;
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0).toFixed(2);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};