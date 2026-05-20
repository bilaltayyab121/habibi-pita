import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { businessData } from "../data/businessData";
import { images } from "../data/images";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-h-black/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2">
            <img
              src={images.logo}
              alt="Habibi Pita — Pita. Pop & Love"
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-contain bg-h-white p-0.5"
            />
            <span className="font-display font-extrabold text-2xl text-h-white uppercase tracking-tight hidden sm:inline">
              Habibi<span className="text-h-red">.</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-h-cream/70 hover:text-h-white transition-colors text-sm font-semibold uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2.5 rounded-full bg-h-white/5 hover:bg-h-white/10 transition-colors border border-h-white/10"
            >
              <ShoppingCart className="w-5 h-5 text-h-white" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-h-red text-h-white text-[10px] font-bold flex items-center justify-center"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            <a
              href={`tel:${businessData.phone}`}
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-h-red text-h-white font-bold text-sm uppercase tracking-wider hover:bg-h-red-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-full bg-h-white/5 border border-h-white/10"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-h-white" />
              ) : (
                <Menu className="w-5 h-5 text-h-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-h-black/98 backdrop-blur-xl border-t border-h-white/5"
          >
            <nav className="px-6 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="block py-3 px-4 rounded-xl text-h-white hover:bg-h-red/10 hover:text-h-red transition-colors font-semibold uppercase tracking-wider text-sm"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={`tel:${businessData.phone}`}
                className="flex items-center justify-center gap-2 mt-4 py-3 rounded-full bg-h-red text-h-white font-bold uppercase tracking-wider"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
