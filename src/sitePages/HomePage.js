import React from "react";
import HeroSlider from "../components/HeroSlider";
import AboutSec from "../components/AboutSec";
import ServiceSlider from "../components/ServiceSlider";
import WorkDetail from "../components/WorkDetail";
import WorkSlider from "../components/WorkSlider";

function HomePage() {
    return (
      <>
        <HeroSlider />
        <AboutSec />
        <ServiceSlider />
        <WorkDetail />
        <WorkSlider />
      </>
    );
  }
  
  export default HomePage;