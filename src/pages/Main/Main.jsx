import React from "react";
import Alumni from "../../components/Alumni/Alumni";
import Courses from "../../components/Courses/Courses";
import Footer from "../../components/Footer/Footer";
import Ready from "../../components/Ready/Ready";
import Video from "../../components/Video/Video";

const Main = () => {
  return (
    <>
      <Courses />
      <Video />
      <Alumni />
      <Ready />
      <Footer />
    </>
  );
};

export default Main;
