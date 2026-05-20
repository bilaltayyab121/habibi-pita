import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Users, Send } from "lucide-react";

const seatOptions = ["Indoor", "Family Table", "Quick Dining"];
const occasionOptions = ["Casual Meal", "Family Dinner", "Tourist Visit", "Group Gathering"];

export default function ReservationSection() {
  const [form, setForm] = useState({
    name: "", phone: "", date: "", time: "", guests: "2",
    seating: "Indoor", occasion: "Casual Meal", request: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputCls =
    "w-full bg-h-white border border-gray-200 rounded-xl px-4 py-3.5 text-h-black placeholder-gray-400 focus:outline-none focus:border-h-red focus:ring-2 focus:ring-h-red/10 transition-all font-telegraf";

  return (
    <section id="reservations" className="relative py-24 bg-h-cream overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-h-red text-h-white text-xs font-bold uppercase tracking-widest mb-5">
            Reservations
          </span>
          <h2 className="font-telegraf font-extrabold text-3xl sm:text-4xl text-h-black mb-4">
            Reserve Your <span className="text-h-red">Experience</span>
          </h2>
          <p className="text-h-black/50 max-w-xl mx-auto font-telegraf">
            Book ahead to guarantee your table, especially during busy evenings and weekends.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-h-white rounded-3xl p-6 sm:p-10 shadow-lg"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-h-black/60 text-sm font-semibold mb-2 uppercase tracking-wider">Full Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={inputCls} required />
            </div>
            <div>
              <label className="block text-h-black/60 text-sm font-semibold mb-2 uppercase tracking-wider">Phone Number</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+212 ..." className={inputCls} required />
            </div>
            <div>
              <label className="block text-h-black/60 text-sm font-semibold mb-2 uppercase tracking-wider">
                <CalendarDays className="w-4 h-4 inline mr-1" />Date
              </label>
              <input type="date" name="date" value={form.date} onChange={handleChange} className={inputCls} required />
            </div>
            <div>
              <label className="block text-h-black/60 text-sm font-semibold mb-2 uppercase tracking-wider">
                <Clock className="w-4 h-4 inline mr-1" />Time
              </label>
              <input type="time" name="time" value={form.time} onChange={handleChange} className={inputCls} required />
            </div>
            <div>
              <label className="block text-h-black/60 text-sm font-semibold mb-2 uppercase tracking-wider">
                <Users className="w-4 h-4 inline mr-1" />Guests
              </label>
              <select name="guests" value={form.guests} onChange={handleChange} className={inputCls}>
                {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-h-black/60 text-sm font-semibold mb-2 uppercase tracking-wider">Seating</label>
              <div className="flex gap-2 flex-wrap">
                {seatOptions.map((opt) => (
                  <button type="button" key={opt}
                    onClick={() => setForm((p) => ({ ...p, seating: opt }))}
                    className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                      form.seating === opt
                        ? "bg-h-red text-h-white"
                        : "bg-h-cream text-h-black/60 hover:bg-gray-200"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5">
            <label className="block text-h-black/60 text-sm font-semibold mb-2 uppercase tracking-wider">Occasion</label>
            <div className="flex gap-2 flex-wrap">
              {occasionOptions.map((opt) => (
                <button type="button" key={opt}
                  onClick={() => setForm((p) => ({ ...p, occasion: opt }))}
                  className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    form.occasion === opt
                      ? "bg-h-red text-h-white"
                      : "bg-h-cream text-h-black/60 hover:bg-gray-200"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <label className="block text-h-black/60 text-sm font-semibold mb-2 uppercase tracking-wider">Special Request</label>
            <textarea name="request" value={form.request} onChange={handleChange} rows={3} placeholder="Any special requests..." className={`${inputCls} resize-none`} />
          </div>

          <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            className="mt-8 w-full flex items-center justify-center gap-3 py-4 rounded-full bg-h-red text-h-white font-bold text-base uppercase tracking-wider hover:bg-h-red-dark transition-colors"
          >
            <Send className="w-5 h-5" />
            {submitted ? "Reservation Confirmed! ✓" : "Confirm Reservation"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
