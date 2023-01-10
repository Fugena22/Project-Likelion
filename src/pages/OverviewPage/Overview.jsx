import React from "react";
import "./Overview.css";
import Footer from "../../components/Footer/Footer";
import Overviews from "../../components/Overview/Overviews";
import Support from "../../components/Support/Support";

const Overview = () => {
  return (
    <>
      <h3 className="md:font-body md:font-bold md:text-5xl md:flex md:items-center md:text-primary md:justify-center md:pb-40 sm:hidden">
        Frequency Asked Questions
      </h3>
      <Overviews />
      <Support />
      <Footer />
    </>
  );
};

export default Overview;
