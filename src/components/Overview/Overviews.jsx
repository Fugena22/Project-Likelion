import React from "react";
import Charge from "./Charge/Charge";
import Coding from "./Coding/Coding";
import Courses from "./Courses/Courses";
import Question from "./Question/Question";

const Overviews = () => {
  return (
    <div className="flex flex-col items-start gap-20 pb-20 px-4">
      <Question />
      <Courses />
      <Charge />
      <Coding />
    </div>
  );
};

export default Overviews;
