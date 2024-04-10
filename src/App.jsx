import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Title from "./Components/Title/Title";
import Program from "./Components/Programs/Program";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title title="OUR PROGRAMS" subtitle="What We Offer" />
      <Program />
      <Title title="GALLERY" subtitle="Campus Photos" />
      <Campus />
      <Title title="TESTIMONIALS" subtitle="What Student Says" />
      <Testimonials />
    </div>
  );
};

export default App;
