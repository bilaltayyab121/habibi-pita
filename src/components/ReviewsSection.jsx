import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { reviews, businessData } from "../data/businessData";

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-h-red fill-h-red" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-24 bg-h-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-h-red text-h-white text-xs font-bold uppercase tracking-widest mb-5">
            Reviews
          </span>
          <h2 className="font-telegraf font-extrabold text-3xl sm:text-4xl text-h-white mb-6">
            What Our Guests <span className="text-h-red">Say</span>
          </h2>

          <div className="inline-flex items-center gap-4 bg-h-white/5 rounded-2xl px-8 py-4 border border-h-white/10">
            <span className="text-4xl font-extrabold text-h-red font-telegraf">
              {businessData.rating}
            </span>
            <div className="text-left">
              <StarRating rating={5} />
              <p className="text-h-cream/40 text-sm mt-1">
                {businessData.totalReviews}+ reviews
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-h-white/5 rounded-2xl p-6 border border-h-white/5 hover:border-h-red/20 transition-all"
            >
              <Quote className="w-7 h-7 text-h-red/30 mb-3" />
              <p className="text-h-cream/80 leading-relaxed mb-5 font-telegraf">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-h-red flex items-center justify-center text-h-white font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-h-white font-semibold text-sm">{review.name}</p>
                    <p className="text-h-cream/30 text-xs">{review.date}</p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
