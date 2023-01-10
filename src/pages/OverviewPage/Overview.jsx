import React from "react";
import "./Overview.css";
import Footer from "../../components/Footer/Footer";
import Overviews from "../../components/Overview/Overviews";
import Support from "../../components/Support/Support";

const Overview = () => {
  return (
    <>
      <Overviews />
      <Support />
      <Footer />
    </>
  );
};

export default Overview;
