import { Heart } from "lucide-react";
import { businessData } from "../data/businessData";

export default function Footer() {
  return (
    <footer className="bg-h-black border-t border-h-white/5 py-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-h-cream/40 font-telegraf">
        <p>&copy; {new Date().getFullYear()} {businessData.name}. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <Heart className="w-3.5 h-3.5 text-h-red fill-h-red" /> in Kenitra
        </p>
      </div>
    </footer>
  );
}
