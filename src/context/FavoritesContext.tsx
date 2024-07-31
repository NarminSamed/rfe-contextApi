import React, { createContext, useContext, useState, ReactNode } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  liked: boolean;
}

interface FavoritesContextType {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  toggleCount: number;
  removeFavorite: (productId: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("Error:");
  }
  return context;
};

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  const toggleFavorite = (product: Product) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === product.id)) {
        return prevFavorites.filter((fav) => fav.id !== product.id);
      } else {
        return [...prevFavorites, { ...product, liked: true }];
      }
    });
  };

  const toggleCount = favorites.length;

  const removeFavorite = (productId: number) => {
    setFavorites(favorites.filter((fav) => fav.id !== productId));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, toggleCount, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
