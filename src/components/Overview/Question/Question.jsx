import React from "react";
import ArrowDownIconBlack from "../../../assets/Icon/ArrowDownIconBlack";

const Question = () => {
  return (
    <div className="flex flex-col items-start p-0 gap-16">
      <h5 className="font-body font-semibold text-2xl text-secondary uppercase">
        Overview
      </h5>
      <hr />
      <div className="flex flex-col items-start p-0 gap-8">
        <div className="flex flex-col items-start p-0 gap-6">
          <div className="flex flex-row justify-between items-center p-0 gap-40">
            <h5 className="font-body font-bold text-xl tracking-wide text-secondary">
              LIKELION là ai?
            </h5>
            <ArrowDownIconBlack />
          </div>
          <div className="flex flex-row justify-between items-center p-0 gap-20">
            <h5 className="font-body font-bold text-xl tracking-wide text-secondary">
              LIKELION dạy những gì?
            </h5>
            <ArrowDownIconBlack />
          </div>
          <div className="flex flex-row justify-between items-center p-0">
            <h5 className="font-body font-bold text-xl tracking-wide text-secondary">
              Ai có thể tham gia khoá học tại LIKELION?
            </h5>
            <ArrowDownIconBlack />
          </div>
          <div className="flex flex-row justify-between items-center p-0">
            <h5 className="font-body font-bold text-xl tracking-wide text-secondary">
              Tại sao nên chọn học tại LIKELION?
            </h5>
            <ArrowDownIconBlack />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
