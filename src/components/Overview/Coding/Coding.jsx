import React from "react";
import ArrowDownIconBlack from "../../../assets/Icon/ArrowDownIconBlack";

const Coding = () => {
  return (
    <div className="flex flex-col items-start p-0 gap-16">
      <h5 className="font-body font-semibold text-2xl text-secondary uppercase">
        Lập trình
      </h5>
      <hr />
      <div className="flex flex-col items-start p-0 gap-8">
        <div className="flex flex-col items-start p-0 gap-6">
          <div className="flex flex-row justify-between items-center p-0">
            <h5 className="font-body font-bold text-xl tracking-wide text-secondary">
              Tại sao nên học lập trình?
            </h5>
            <ArrowDownIconBlack />
          </div>
          <div className="flex flex-row justify-between items-center p-0">
            <h5 className="font-body font-bold text-xl tracking-wide text-secondary">
              Front-end, Back-end hay Full-stack là gì?
            </h5>
            <ArrowDownIconBlack />
          </div>
          <div className="flex flex-row justify-between items-center p-0">
            <h5 className="font-body font-bold text-xl tracking-wide text-secondary">
              Học lập trình ra làm gì?
            </h5>
            <ArrowDownIconBlack />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coding;
