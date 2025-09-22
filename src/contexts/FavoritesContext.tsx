"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Author } from "../types/author";

interface FavoritesContextType {
  favorites: Author[];
  toggleFavorite: (author: Author) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Author[]>([]);

  const toggleFavorite = (author: Author) => {
    setFavorites((prev) => {
      const exists = prev.find((a) => a.id === author.id);
      return exists ? prev.filter((a) => a.id !== author.id) : [...prev, author];
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites must be used inside FavoritesProvider");
  return context;
}
