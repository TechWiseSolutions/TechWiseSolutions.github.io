import React from "react";
import ResponsiveAppBar from "../Components/Common/ResponsiveAppBar";
import Header from "../Components/Home/Hero";
import About from "../Components/Home/About";
import FeaturedServices from "../Components/Home/FeaturedServices";
import Testimonials from "../Components/Home/Testimonials";
function Home() {
  return (
    <div>
      <div className="nav">
        <ResponsiveAppBar />
      </div>
      <div className="hero">
        <Header />
      </div>
      <div className="about us">
        <About />
      </div>
      <div className="services">
        <FeaturedServices />
      </div>
      <div className="testimonials">
        <Testimonials />
      </div>
    </div>
  );
}

export default Home;
