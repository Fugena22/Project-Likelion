import React from "react";
import Charge from "./Charge/Charge";
import Coding from "./Coding/Coding";
import Courses from "./Courses/Courses";
import Question from "./Question/Question";

const Overviews = () => {
  return (
    <div className="flex flex-row justify-between px-8">
      <div className="flex flex-col items-center p-0 border-0.5 border-solid border-[#939393] rounded">
        <div className="self-stretch border-b-0.5 border-b-[#939393] border-solid">
          <span className="font-text text-base flex items-center tracking-tight text-black">
            Tổng quan
          </span>
        </div>
        <div className="self-stretch border-b-0.5 border-b-[#939393] border-solid">
          <span className="font-text text-base flex items-center tracking-tight text-black">
            Khoá học
          </span>
        </div>
        <div className="self-stretch border-b-0.5 border-b-[#939393] border-solid">
          <span className="font-text text-base flex items-center tracking-tight text-black">
            Học phí
          </span>
        </div>
        <div className="self-stretch border-b-0.5 border-b-[#939393] border-solid">
          <span className="font-text text-base flex items-center tracking-tight text-black">
            Lập trình
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
