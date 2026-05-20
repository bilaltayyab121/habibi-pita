import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag, Send } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const {
    items, isOpen, setIsOpen, updateQty, removeItem,
    clearCart, totalItems, totalPrice, sendToWhatsApp,
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-h-black/70 backdrop-blur-sm z-[60]"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-h-white z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-h-red" />
                <h2 className="text-xl font-telegraf font-bold text-h-black">
                  Your Order
                </h2>
                {totalItems > 0 && (
                  <span className="px-2.5 py-0.5 rounded-full bg-h-red text-h-white text-xs font-bold">
                    {totalItems}
                  </span>
                )}
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-gray-200 mb-4" />
                  <p className="text-gray-400 text-lg font-telegraf">Your cart is empty</p>
                  <p className="text-gray-300 text-sm mt-1">Add some delicious items from our menu</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    className="bg-h-cream rounded-2xl p-4"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-h-black font-bold font-telegraf">{item.name}</h4>
                        <p className="text-h-red font-bold text-sm mt-1">{item.price} MAD</p>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="p-1.5 rounded-lg hover:bg-red-50 transition-colors">
                        <Trash2 className="w-4 h-4 text-h-red" />
                      </button>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-8 h-8 rounded-full bg-h-white flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-200"
                      >
                        <Minus className="w-3.5 h-3.5 text-h-black" />
                      </button>
                      <span className="text-h-black font-bold min-w-[20px] text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-8 h-8 rounded-full bg-h-red flex items-center justify-center hover:bg-h-red-dark transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5 text-h-white" />
                      </button>
                      <span className="ml-auto text-h-black font-bold">{item.price * item.qty} MAD</span>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-100 px-6 py-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 font-telegraf">Total</span>
                  <span className="text-2xl font-extrabold text-h-red font-telegraf">{totalPrice} MAD</span>
                </div>
                <button
                  onClick={sendToWhatsApp}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-full bg-green-600 text-h-white font-bold text-base uppercase tracking-wider hover:bg-green-700 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Order via WhatsApp
                </button>
                <button
                  onClick={clearCart}
                  className="w-full py-2.5 rounded-full text-gray-400 hover:text-h-red hover:bg-red-50 transition-colors text-sm font-semibold"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
