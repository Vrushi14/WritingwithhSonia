import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import CollegeEssay from "./pages/CollegeEssay";
import Club from "./pages/Club";
import Testimonials from "./pages/Testimonials";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-cream)]">
      <ScrollToTop />
      <ScrollReveal />
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/college-essay-coaching" element={<CollegeEssay />} />
          <Route path="/confident-writers-club" element={<Club />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
