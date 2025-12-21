import React, { useState, useRef } from "react";
import InfiniteImageReel from "../InfiniteImageReel.jsx"
import HowWeWork from "../HowWeWork.jsx";

import Navbar from "../Navbar";
import WhyChooseus from "../WhyChooseus.jsx";
import ContactUs from "../ContactUs.jsx";

const Shopify = ({ before, after }) => {

  return (
    <>
    <Navbar/>
   <section className="sm:mt-10">
        <InfiniteImageReel />
        <HowWeWork/>
        <WhyChooseus/>
        <ContactUs/>
      </section>
     
</>
  );
};

export default Shopify;
