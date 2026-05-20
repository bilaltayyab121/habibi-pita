import { motion } from "framer-motion";
import {
  Star,
  MessageCircle,
  TrendingUp,
  Heart,
  Clock,
  Flame,
  Globe,
  Moon,
} from "lucide-react";
import { trustStats } from "../data/businessData";

const iconMap = { Star, MessageCircle, TrendingUp, Heart, Clock, Flame, Globe, Moon };

export default function TrustStats() {
  return (
    <section className="relative py-20 bg-h-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-telegraf font-extrabold text-3xl sm:text-4xl text-h-white mb-3">
            Why Kenitra Loves <span className="text-h-red">Habibi Pita</span>
          </h2>
          <p className="text-h-cream/50 font-telegraf">
            Trusted by hundreds of happy customers every week
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {trustStats.map((stat, i) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="group bg-h-white/5 rounded-2xl p-5 border border-h-white/5 hover:border-h-red/30 transition-all text-center"
              >
                <div className="w-11 h-11 rounded-full bg-h-red/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-h-red/20 transition-colors">
                  <Icon className="w-5 h-5 text-h-red" />
                </div>
                <p className="text-2xl font-bold text-h-white mb-1 font-telegraf">
                  {stat.value}
                </p>
                <p className="text-h-cream/40 text-xs font-semibold uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
