import React, { useState, useRef } from "react";
import InfiniteImageReel from "../InfiniteImageReel.jsx"
import HowWeWork from "../HowWeWork.jsx";

import Navbar from "../Navbar.jsx";
import WhyChooseus from "../WhyChooseus.jsx";
import ContactUs from "../ContactUs.jsx";
import Shopifyprojects from "../Shopifyprojects.jsx";

const Shopify = ({ before, after }) => {

  return (
    <>
    <Navbar/>
   <section className="sm:mt-10">
        <InfiniteImageReel />
        <Shopifyprojects/>
        <HowWeWork/>
        <WhyChooseus/>
        <ContactUs bg={'[#1a1a1a]'}/>
      </section>
     
</>
  );
};

export default Shopify;
