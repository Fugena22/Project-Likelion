import React from "react";
import ArrowDownIconBlack from "../../../assets/Icon/ArrowDownIconBlack";

const Question = () => {
  return (
    <div className="flex flex-col items-start p-0 gap-16">
      <h5 className="font-body font-semibold text-2xl text-secondary">
        Overview
      </h5>
      <hr />
      <div className="flex flex-col items-start p-0 gap-8">
        <div className="flex flex-col items-start p-0 gap-6">
          <div className="flex flex-row justify-between items-center p-0 gap-60">
            <h5 className="font-body font-bold text-xl tracking-wide text-secondary">
              LIKELION là ai?
            </h5>
            <ArrowDownIconBlack />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
