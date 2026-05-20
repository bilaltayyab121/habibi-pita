import { motion } from "framer-motion";
import {
  Sunset,
  Users,
  ShoppingBag,
  Calendar,
  UserPlus,
  Camera,
} from "lucide-react";
import { peakHourCards } from "../data/businessData";

const iconMap = { Sunset, Users, ShoppingBag, Calendar, UserPlus, Camera };

export default function PeakHourSection() {
  return (
    <section className="relative py-24 bg-h-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-h-red text-h-white text-xs font-bold uppercase tracking-widest mb-5">
            Peak Hours
          </span>
          <h2 className="font-telegraf font-extrabold text-3xl sm:text-4xl text-h-black mb-4">
            Don&apos;t Miss Your <span className="text-h-red">Table</span>
          </h2>
          <p className="text-h-black/60 max-w-2xl mx-auto font-telegraf leading-relaxed">
            Peak hours can become extremely busy during evenings and weekends.
            Peak hours get busy fast. Call ahead or order on Glovo for the best
            experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {peakHourCards.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group bg-h-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="w-13 h-13 rounded-full bg-h-red/10 flex items-center justify-center mb-4 group-hover:bg-h-red/15 transition-colors">
                  <Icon className="w-6 h-6 text-h-red" />
                </div>
                <h3 className="font-telegraf font-bold text-h-black text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-h-black/50 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
