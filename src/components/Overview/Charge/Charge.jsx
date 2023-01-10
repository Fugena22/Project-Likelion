import React from "react";
import ArrowDownIconBlack from "../../../assets/Icon/ArrowDownIconBlack";
import Line from "../../../assets/Icon/Line";
import SmLine from "../../../assets/Icon/SmLine";

const Charge = () => {
  return (
    <div className="flex flex-col items-start p-0 gap-16">
      <h5 className="font-body font-semibold text-2xl text-secondary uppercase">
        Học phí
      </h5>
      <Line />
      <div className="flex flex-col items-start p-0 gap-8">
        <div className="flex flex-col items-start p-0 gap-6">
          <div className="flex flex-row justify-between items-center p-0">
            <h5 className="font-body font-bold text-xl tracking-wide text-secondary">
              Học phí của các khoá học là bao nhiêu?
            </h5>
            <ArrowDownIconBlack />
          </div>
          <SmLine />
          <div className="flex flex-row justify-between items-center p-0">
            <h5 className="font-body font-bold text-xl tracking-wide text-secondary">
              Hình thức thanh toán học phí như thế nào?
            </h5>
            <ArrowDownIconBlack />
          </div>
          <SmLine />
          <div className="flex flex-row justify-between items-center p-0">
            <h5 className="font-body font-bold text-xl tracking-wide text-secondary">
              Tôi cần chuẩn bị gì khi tham gia khoá học?
            </h5>
            <ArrowDownIconBlack />
          </div>
          <SmLine />
        </div>
      </div>
    </div>
  );
};

export default Charge;
