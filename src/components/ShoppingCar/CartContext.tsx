// CartContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
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
  const [userId, setUserId] = useState<string | null>(null);

  // 🔹 Carrega ID do usuário logado
  useEffect(() => {
    const userData = localStorage.getItem("usuarioLogado");
    if (userData) {
      const user = JSON.parse(userData);
      setUserId(user.userId?.toString() || user.id?.toString() || null);
    }
  }, []);

  // 🔹 Carrega dados salvos do usuário
  useEffect(() => {
    if (!userId) return;
    const savedCart = localStorage.getItem(`cart_${userId}`);
    const savedPurchased = localStorage.getItem(`purchased_${userId}`);

    setCart(savedCart ? JSON.parse(savedCart) : []);
    setPurchasedItems(savedPurchased ? JSON.parse(savedPurchased) : []);
  }, [userId]);

  // 🔹 Salva carrinho sempre que mudar
  useEffect(() => {
    if (userId) {
      localStorage.setItem(`cart_${userId}`, JSON.stringify(cart));
    }
  }, [cart, userId]);

  // 🔹 Salva itens comprados sempre que mudar
  useEffect(() => {
    if (userId) {
      localStorage.setItem(`purchased_${userId}`, JSON.stringify(purchasedItems));
    }
  }, [purchasedItems, userId]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const clearCart = () => setCart([]);

  const finalizePurchase = () => {
    setPurchasedItems((prev) => {
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




// // CartContext.tsx
// import React, { createContext, useContext, useState } from "react";
// import type { ReactNode } from "react";

// type Product = {
//   id: number;
//   name: string;
//   description: string;
//   image: string;
// };

// type CartContextType = {
//   cart: Product[];
//   purchasedItems: Product[];
//   addToCart: (product: Product) => void;
//   clearCart: () => void;
//   finalizePurchase: () => void;
//   isPurchased: (id: number) => boolean;
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [cart, setCart] = useState<Product[]>([]);
//   const [purchasedItems, setPurchasedItems] = useState<Product[]>([]);

//   const addToCart = (product: Product) => {
//     setCart((prev) => [...prev, product]);
//   };

//   const clearCart = () => setCart([]);

//   const finalizePurchase = () => {
//     setPurchasedItems((prev) => {
//       // evita duplicatas
//       const all = [...prev];
//       cart.forEach((item) => {
//         if (!all.find((p) => p.id === item.id)) {
//           all.push(item);
//         }
//       });
//       return all;
//     });
//     clearCart();
//   };

//   const isPurchased = (id: number) =>
//     purchasedItems.some((item) => item.id === id);

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         purchasedItems,
//         addToCart,
//         clearCart,
//         finalizePurchase,
//         isPurchased,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart deve ser usado dentro de um CartProvider");
//   }
//   return context;
// }
