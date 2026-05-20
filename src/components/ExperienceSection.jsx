import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import { images } from "../data/images";

const cards = [
  { title: "Delivery Habibi", image: images.experience[0], alt: "Habibi delivery illustration", contain: true },
  { title: "Freshly baked pita, twice a day", image: images.experience[1], alt: "Stack of freshly baked pita bread" },
  { title: "Pita's full of love", image: images.experience[2], alt: "Chef holding a Habibi pita sandwich" },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative bg-h-pink py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="font-telegraf font-extrabold text-4xl sm:text-5xl text-h-red leading-tight">
            What We Offer
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-telegraf text-lg sm:text-xl text-h-black/70 mb-16 max-w-2xl mx-auto"
        >
          Le goût simple, la vibe juste, <strong>l&apos;amour en plus</strong>.
        </motion.p>

        {/* Feature cards + images */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-h-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="aspect-square rounded-xl mb-5 overflow-hidden bg-h-cream">
                <img
                  src={card.image}
                  alt={card.alt}
                  className={`w-full h-full ${card.contain ? "object-contain bg-h-black p-4" : "object-cover"}`}
                />
              </div>
              <h3 className="font-telegraf font-extrabold text-sm uppercase tracking-wider text-h-black text-center">
                {card.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-h-red-dark text-h-cream font-bold text-sm uppercase tracking-wider hover:bg-h-red transition-colors"
          >
            View Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
