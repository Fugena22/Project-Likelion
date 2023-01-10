import React from "react";
import Charge from "./Charge/Charge";
import Coding from "./Coding/Coding";
import Courses from "./Courses/Courses";
import Question from "./Question/Question";

const Overviews = () => {
  return (
    <div className="flex flex-col items-start p-0 gap-20">
      <Question />
      <Courses />
      <Charge />
      <Coding />
    </div>
  );
};

export default Overviews;
