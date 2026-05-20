import { createContext, useContext, useState, useCallback } from "react";
import { businessData } from "../data/businessData";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((item) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  }, []);

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQty = useCallback((id, qty) => {
    if (qty <= 0) {
      setItems((prev) => prev.filter((i) => i.id !== id));
    } else {
      setItems((prev) =>
        prev.map((i) => (i.id === id ? { ...i, qty } : i))
      );
    }
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  const sendToWhatsApp = useCallback(() => {
    if (items.length === 0) return;

    let message = `🧆 *New Order – Habibi Pita*\n\n`;
    items.forEach((item) => {
      message += `• ${item.name} x${item.qty} — ${item.price * item.qty} MAD\n`;
    });
    message += `\n💰 *Total: ${totalPrice} MAD*`;
    message += `\n\nMerci! 🙏`;

    const encoded = encodeURIComponent(message);
    window.open(
      `https://wa.me/${businessData.whatsapp}?text=${encoded}`,
      "_blank"
    );
  }, [items, totalPrice]);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        setIsOpen,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        totalItems,
        totalPrice,
        sendToWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
