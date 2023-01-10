import React from "react";
import ArrowDownIconBlack from "../../../assets/Icon/ArrowDownIconBlack";
import Line from "../../../assets/Icon/Line";
import SmLine from "../../../assets/Icon/SmLine";

const Courses = () => {
  return (
    <div className="flex flex-col items-start p-0 gap-16">
      <h5 className="font-body font-semibold text-2xl text-secondary uppercase">
        Khoá học
      </h5>
      <Line />
      <div className="flex flex-col items-start p-0 gap-8">
        <div className="flex flex-col items-start p-0 gap-6">
          <div className="flex flex-row justify-between items-center p-0">
            <h5 className="font-body font-bold text-xl tracking-wide text-secondary">
              Các khoá học có yêu cầu đầu vào không?
            </h5>
            <ArrowDownIconBlack />
          </div>
          <SmLine />
          <div className="flex flex-row justify-between items-center p-0">
            <h5 className="font-body font-bold text-xl tracking-wide text-secondary">
              Mỗi lớp có bao nhiêu học viên?
            </h5>
            <ArrowDownIconBlack />
          </div>
          <SmLine />
          <div className="flex flex-row justify-between items-center p-0">
            <h5 className="font-body font-bold text-xl tracking-wide text-secondary">
              Thời gian khai giảng của các khoá học như thế nào?
            </h5>
            <ArrowDownIconBlack />
          </div>
          <SmLine />
          <div className="flex flex-row justify-between items-center p-0">
            <h5 className="font-body font-bold text-xl tracking-wide text-secondary">
              Thời gian cho mỗi khoá học?
            </h5>
            <ArrowDownIconBlack />
          </div>
          <SmLine />
          <div className="flex flex-row justify-between items-center p-0">
            <h5 className="font-body font-bold text-xl tracking-wide text-secondary">
              Lộ trình khoá học như thế nào?
            </h5>
            <ArrowDownIconBlack />
          </div>
          <SmLine />
          <div className="flex flex-row justify-between items-center p-0">
            <h5 className="font-body font-bold text-xl tracking-wide text-secondary">
              LIKELION có hỗ trợ việc làm sau khoá học không?
            </h5>
            <ArrowDownIconBlack />
          </div>
          <SmLine />
        </div>
      </div>
    </div>
  );
};

export default Courses;
