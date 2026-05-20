import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { businessData } from "../data/businessData";
import { images } from "../data/images";

export default function FinalCTA() {
  return (
    <section className="relative py-24 bg-h-red overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={images.hero.background}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-h-red/85" />
      </div>
      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-h-white leading-tight mb-6">
            Experience authentic Moroccan flavors at{" "}
            <span className="underline decoration-h-white/30 underline-offset-4">
              Habibi Pita
            </span>
          </h2>
          <p className="text-h-white/80 text-lg font-telegraf max-w-2xl mx-auto mb-10">
            Discover why Kenitra loves Habibi Pita. Freshly baked pita, authentic
            flavors, and warm hospitality await you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full bg-h-black text-h-white font-bold text-base uppercase tracking-wider hover:bg-h-dark transition-colors"
            >
              View Full Menu
            </motion.a>
            <motion.a
              href={`tel:${businessData.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-10 py-4 rounded-full border-2 border-h-white/40 text-h-white font-bold text-base uppercase tracking-wider hover:bg-h-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
