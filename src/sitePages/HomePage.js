import React from "react";
import HeroSlider from "../components/HeroSlider";
import HomeAbout from "../components/AboutSec";
import ServiceSlider from "../components/ServiceSlider";
import WorkDetail from "../components/WorkDetail";
import WorkSlider from "../components/WorkSlider";

function HomePage() {
  const ballStyle2 = {
    display:'none'
  }
    return (
      <>
        <HeroSlider />
        <HomeAbout style2={ballStyle2} linkArrow="images/icon/Arrow back.svg" linkName="Discover Now" heading={<>Top IT Company in India - <span className="qty">Qwerty <span>Code</span></span></>} title="OUR COMPANY" para="Having a team of talented professionals with decades of experience. We, at Qwerty Code believe in delivering unparalleled services to the business around the globe. Qwerty Code Pvt. Ltd. has initiated to assist business enterprises to achieve efficiency and effectiveness by taking them into the e-world, being partners in e-revolution." linkBtn="/about" />
        <ServiceSlider />
        <WorkDetail />
        <WorkSlider />
      </>
    );
  }
  
  export default HomePage;