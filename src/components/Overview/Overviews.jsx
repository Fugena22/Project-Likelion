import React from "react";
import Charge from "./Charge/Charge";
import Coding from "./Coding/Coding";
import Courses from "./Courses/Courses";
import Question from "./Question/Question";

const Overviews = () => {
  return (
    <div className="flex flex-row justify-between px-8">
      <div className="flex flex-col items-center p-0 border-0.5 border-solid border-[#939393] rounded">
        <div className="self-stretch border-b-0.5 border-b-[#939393] border-solid relative w-36 h-11">
          <span className="font-text text-base flex items-center tracking-tight text-black absolute top-2 left-6">
            <a href="#question">Tổng quan</a>
          </span>
        </div>
        <div className="self-stretch border-b-0.5 border-b-[#939393] border-solid relative w-36 h-11">
          <span className="font-text text-base flex items-center tracking-tight text-black absolute top-2 left-6">
            <a href="#courses">Khoá học</a>
          </span>
        </div>
        <div className="self-stretch border-b-0.5 border-b-[#939393] border-solid relative w-36 h-11">
          <span className="font-text text-base flex items-center tracking-tight text-black absolute top-2 left-6">
            <a href="#charge">Học phí</a>
          </span>
        </div>
        <div className="self-stretch border-b-0.5 border-b-[#939393] border-solid relative w-36 h-11">
          <span className="font-text text-base flex items-center tracking-tight text-black absolute top-2 left-6">
            <a href="#coding">Lập trình</a>
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start gap-20 pb-20 px-4">
        <Question />
        <Courses />
        <Charge />
        <Coding />
      </div>
    </div>
  );
};

export default Overviews;
