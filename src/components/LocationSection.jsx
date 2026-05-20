import { motion } from "framer-motion";
import { Phone, Navigation } from "lucide-react";
import { businessData } from "../data/businessData";
import { images } from "../data/images";

export default function LocationSection() {
  return (
    <section id="contact" className="relative py-24 bg-h-black overflow-hidden">
      <motion.div className="absolute inset-0" aria-hidden="true">
        <img
          src={images.location.background}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <motion.div className="absolute inset-0 bg-gradient-to-r from-h-black via-h-black/95 to-h-black/80" />
      </motion.div>

      <motion.div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <motion.div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-telegraf font-extrabold text-xs text-h-cream uppercase tracking-[0.2em] mb-3">
                Opening Hours
              </h3>
              <motion.div className="space-y-1 font-telegraf text-h-cream/80">
                <p>{businessData.hours.weekday.label}: {businessData.hours.weekday.time}</p>
                <p>{businessData.hours.weekend.label}: {businessData.hours.weekend.time}</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <a
                href={`mailto:${businessData.email}`}
                className="font-telegraf text-h-cream/80 text-xl hover:text-h-red transition-colors"
              >
                {businessData.email}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-telegraf font-extrabold text-xs text-h-cream uppercase tracking-[0.2em] mb-3">
                Location
              </h3>
              <motion.div className="space-y-1 font-telegraf text-h-cream/80">
                <p>{businessData.address.street}</p>
                <p>{businessData.address.detail}</p>
                <p>
                  {businessData.address.city}, {businessData.address.country}
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-telegraf font-extrabold text-xs text-h-cream uppercase tracking-[0.2em] mb-3">
                Follow Us On
              </h3>
              <motion.div className="space-y-2 font-telegraf text-h-cream/80">
                <a
                  href={businessData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-h-red transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={businessData.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-h-red transition-colors"
                >
                  Facebook
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              <a
                href={`tel:${businessData.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-h-red text-h-white font-bold text-sm uppercase tracking-wider hover:bg-h-red-dark transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={businessData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-h-cream/20 text-h-cream font-bold text-sm uppercase tracking-wider hover:bg-h-white/5 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Open Directions
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div className="aspect-[4/3] rounded-2xl bg-h-white/5 border border-h-white/10 overflow-hidden">
              <iframe
                title="Habibi Pita on Google Maps"
                src={businessData.mapsEmbedUrl}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
