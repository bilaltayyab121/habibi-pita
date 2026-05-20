import { motion } from "framer-motion";
import { images } from "../data/images";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-h-cream py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={images.about}
                alt="Habibi Pita being prepared fresh in the kitchen"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-telegraf font-extrabold text-4xl sm:text-5xl text-h-black leading-tight mb-8">
              All About habibi
            </h2>
            <div className="space-y-4 text-h-red text-lg sm:text-xl leading-relaxed font-telegraf">
              <p>
                Chaque plat raconte notre manière d&apos;aimer :
              </p>
              <p>
                la <strong>pita</strong>, c&apos;est la base ; le{" "}
                <strong>pop</strong>, c&apos;est la vibe ;
              </p>
              <p>
                le <strong>love</strong>, c&apos;est la signature.
              </p>
              <p className="pt-4">
                Un plaisir simple, à prendre sans hésiter.
              </p>
            </div>

            <a
              href="#menu"
              className="inline-flex items-center gap-2 mt-10 px-8 py-3.5 rounded-full bg-h-black text-h-cream font-bold text-sm uppercase tracking-wider hover:bg-h-dark transition-colors"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
