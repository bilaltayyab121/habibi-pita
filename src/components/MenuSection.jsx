import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, Check, Flame } from "lucide-react";
import { menuItems, menuCategories } from "../data/businessData";
import { images } from "../data/images";
import { useCart } from "../context/CartContext";

function MenuCard({ item }) {
  const { addItem, items } = useCart();
  const [added, setAdded] = useState(false);
  const inCart = items.find((i) => i.id === item.id);

  const handleAdd = () => {
    addItem(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 800);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      className="group bg-h-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100"
    >
      <div className="relative h-40 overflow-hidden bg-h-cream">
        <img
          src={item.image || images.menu.default}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {(item.topSeller || item.popular) && (
          <div className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 rounded-full bg-h-red text-h-white text-xs font-bold uppercase tracking-wider">
            <Flame className="w-3 h-3" />
            {item.topSeller ? "Top seller" : "Popular"}
          </div>
        )}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-h-black/70 text-h-white text-xs font-semibold">
          {item.category}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-telegraf font-bold text-h-black text-lg mb-1">
          {item.name}
        </h3>
        <p className="text-h-black/40 text-sm leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-telegraf font-bold text-h-red text-xl">
            {item.price}{" "}
            <span className="text-sm font-normal text-h-black/40">MAD</span>
          </span>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleAdd}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all ${
              added
                ? "bg-green-500 text-h-white"
                : "bg-h-red text-h-white hover:bg-h-red-dark"
            }`}
          >
            {added ? (
              <><Check className="w-4 h-4" />Added</>
            ) : (
              <><Plus className="w-4 h-4" />Add{inCart ? ` (${inCart.qty})` : ""}</>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function MenuSection() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result = menuItems;
    if (active === "Top sellers") result = result.filter((i) => i.topSeller);
    else if (active !== "All") result = result.filter((i) => i.category === active);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (i) => i.name.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)
      );
    }
    return result;
  }, [active, search]);

  return (
    <section id="menu" className="relative py-24 bg-h-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-h-red text-h-white text-xs font-bold uppercase tracking-widest mb-5">
            Our Menu
          </span>
          <h2 className="font-telegraf font-extrabold text-3xl sm:text-4xl text-h-black mb-4">
            Explore Our <span className="text-h-red">Flavors</span>
          </h2>
          <p className="text-h-black/50 max-w-xl mx-auto font-telegraf">
            Freshly baked homemade pita&apos;s everyday, only at Habibi.
          </p>
          <p className="text-h-red font-bold text-sm uppercase tracking-wider mt-3 font-telegraf">
            Chaque pita vient avec nos potatoes maison. L&apos;amour est inclus ❤️
          </p>
        </motion.div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search menu..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-h-white border border-gray-200 rounded-full text-h-black placeholder-gray-400 focus:outline-none focus:border-h-red focus:ring-2 focus:ring-h-red/10 transition-all font-telegraf"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-10 scrollbar-hide justify-start sm:justify-center">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                active === cat
                  ? "bg-h-red text-h-white"
                  : "bg-h-white text-h-black/50 hover:text-h-black border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-h-black/40 text-lg font-telegraf">No items found</p>
          </div>
        )}
      </div>
    </section>
  );
}
