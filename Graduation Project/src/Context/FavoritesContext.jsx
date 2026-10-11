import { createContext, useState, useEffect, useContext } from "react";
export const FavoritesContext = createContext();
export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("brewHavenFav");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("brewHavenFav", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (product) => {
    setFavorites(prev => {
      if (prev.find(p => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };
  const removeFromFavorites = (id) => setFavorites(prev => prev.filter(p => p.id !== id));
  const isFavorite = (id) => favorites.some(p => String(p.id) === String(id));

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite, count: favorites.length }}>
      {children}
    </FavoritesContext.Provider>
  );
};