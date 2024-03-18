import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TechStack from './components/TechStack'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container md:mt-12 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <TechStack />
        <ProjectsSection />
        <EmailSection />
      </div>

      <Footer />
    </main>
  );
}
