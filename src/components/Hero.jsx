import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import { images } from "../data/images";

export default function Hero() {
  return (
    <section className="relative min-h-0 bg-h-red flex items-center overflow-hidden py-16 sm:py-20 lg:min-h-[85vh] lg:max-h-[820px]">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={images.hero.background}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-h-red/75" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[15%] w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full overflow-hidden hidden lg:block border-4 border-h-white/20 shadow-2xl"
      >
        <img
          src={images.hero.circle}
          alt="Fresh Habibi pita sandwich"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.a
        href="#"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute top-20 sm:top-24 left-6 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-h-white shadow-lg z-10"
      >
        <img
          src={images.logo}
          alt="Habibi Pita — Pita. Pop & Love"
          className="w-full h-full object-contain bg-h-white p-1"
        />
      </motion.a>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full pt-24 sm:pt-28 lg:pt-32 z-10">
        <div className="lg:ml-auto lg:w-[55%]">
          <motion.a
            href={`tel:${businessData.phone}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 text-h-white/90 font-semibold text-sm uppercase tracking-widest mb-4 sm:mb-6 hover:text-h-white transition-colors"
          >
            <span className="text-lg">📞</span>
            click to order
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display font-black text-5xl sm:text-7xl lg:text-[86px] leading-[1.05] text-h-white mb-4 sm:mb-6"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.3)",
            }}
          >
            love
            <br />
            <span className="text-h-white">you can eat !</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-telegraf text-lg sm:text-2xl text-h-white/90 mb-6 sm:mb-8"
          >
            Homemade, heartfelt. <span className="font-bold">Habibi</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            <a
              href="#menu"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-h-red-dark text-h-white font-bold text-sm uppercase tracking-wider hover:bg-h-black transition-colors"
            >
              View Full Menu
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border-2 border-h-white/30 text-h-white font-bold text-sm uppercase tracking-wider hover:bg-h-white/10 transition-colors"
            >
              Find Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
