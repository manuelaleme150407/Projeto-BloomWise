// CartContext.tsx
import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
};

type CartContextType = {
  cart: Product[];
  purchasedItems: Product[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
  finalizePurchase: () => void;
  isPurchased: (id: number) => boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);
  const [purchasedItems, setPurchasedItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const clearCart = () => setCart([]);

  const finalizePurchase = () => {
    setPurchasedItems((prev) => {
      // evita duplicatas
      const all = [...prev];
      cart.forEach((item) => {
        if (!all.find((p) => p.id === item.id)) {
          all.push(item);
        }
      });
      return all;
    });
    clearCart();
  };

  const isPurchased = (id: number) =>
    purchasedItems.some((item) => item.id === id);

  return (
    <CartContext.Provider
      value={{
        cart,
        purchasedItems,
        addToCart,
        clearCart,
        finalizePurchase,
        isPurchased,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
}
