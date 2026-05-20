import { motion } from "framer-motion";
import { Heart, Users, Baby, Armchair, Globe, Moon } from "lucide-react";

const features = [
  { icon: Heart, title: "Family Dining", desc: "Warm and welcoming space for the whole family." },
  { icon: Users, title: "Group Seating", desc: "Spacious tables for groups and celebrations." },
  { icon: Baby, title: "Kids Meals", desc: "Special menu options for our youngest guests." },
  { icon: Armchair, title: "Comfortable Space", desc: "Modern, clean interior designed for comfort." },
  { icon: Globe, title: "Tourist Friendly", desc: "English, French, and Arabic spoken." },
  { icon: Moon, title: "Evening Atmosphere", desc: "Beautiful ambiance for evening dining." },
];

export default function FamilyFriendlySection() {
  return (
    <section className="relative py-24 bg-h-pink overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-h-red text-h-white text-xs font-bold uppercase tracking-widest mb-5">
            For Everyone
          </span>
          <h2 className="font-telegraf font-extrabold text-3xl sm:text-4xl text-h-black mb-4">
            Family Friendly & <span className="text-h-red">Welcoming</span>
          </h2>
          <p className="text-h-black/50 max-w-2xl mx-auto font-telegraf">
            Whether you&apos;re a local family, a group of friends, or a tourist
            discovering Kenitra — you&apos;re always welcome at Habibi Pita.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group bg-h-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="w-13 h-13 rounded-full bg-h-red/10 flex items-center justify-center mb-4 group-hover:bg-h-red/15 transition-colors">
                <feat.icon className="w-6 h-6 text-h-red" />
              </div>
              <h3 className="font-telegraf font-bold text-h-black text-lg mb-2">
                {feat.title}
              </h3>
              <p className="text-h-black/50 text-sm leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
