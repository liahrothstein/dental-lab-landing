import Footer from '../widgets/footer/Footer';
import Header from '../widgets/header/Header';
import AboutSection from '../widgets/sections/AboutSection/AboutSection';
import ContactsSection from '../widgets/sections/ContactsSection/ContactsSection';
import HeroSection from '../widgets/sections/HeroSection/HeroSection';
import ReviewsSection from '../widgets/sections/ReviewsSection/ReviewsSection';
import ServicesSection from '../widgets/sections/ServicesSection/ServicesSection';
import TeamSection from '../widgets/sections/TeamSection/TeamSection';
import WorksSection from '../widgets/sections/WorksSection/WorksSection';

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <WorksSection />
      <ServicesSection />
      <AboutSection />
      <ReviewsSection />
      <TeamSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}

export default App;