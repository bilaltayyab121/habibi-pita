import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import TrustStats from "./components/TrustStats";
import MenuSection from "./components/MenuSection";
import PeakHourSection from "./components/PeakHourSection";
import ReviewsSection from "./components/ReviewsSection";
import FamilyFriendlySection from "./components/FamilyFriendlySection";
import LocationSection from "./components/LocationSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

function App() {
  return (
    <div className="min-h-screen bg-h-black">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <TrustStats />
        <MenuSection />
        <PeakHourSection />
        <ReviewsSection />
        <FamilyFriendlySection />
        <LocationSection />
        <FinalCTA />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}

export default App;
