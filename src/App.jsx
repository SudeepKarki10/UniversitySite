import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Title from "./Components/Title/Title";
import Program from "./Components/Programs/Program";
import About from "./Components/Aboutus/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title title="OUR PROGRAMS" subtitle="What We Offer" />
      <Program />
      <About />
      <Title title="GALLERY" subtitle="Campus Photos" />
      <Campus />
      <Title title="TESTIMONIALS" subtitle="What Student Says" />
      <Testimonials />
      <Title title="CONTACT US" subtitle="Get in Touch" />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
