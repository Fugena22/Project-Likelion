import React from "react";

const Ready = () => {
  return (
    <div className="flex flex-col sm:justify-center items-center sm:pb-20 sm:px-4 gap-2 md:pb-40">
      <div className="bg-secondary w-full pb-7 items-center flex flex-col gap-3">
        {/* Title */}
        {/* Tablet */}
        <h4 className="md:font-body md:font-semibold md:text-4xl md:flex md:items-center md:tracking-wide md:text-white md:pt-12 sm:hidden">
          Bạn đã sẵn sàng thay đổi?
        </h4>
        {/* Mobile */}
        <h6 className="font-body font-bold text-xl flex items-center text-white pt-7 pb-5 md:hidden">
          Bạn đã sẵn sàng thay đổi?
        </h6>
        {/* Button */}
        <button className="bg-primary text-secondary flex flex-col items-start py-3 px-4 gap-11 font-body font-bold text-base">
          Đăng ký ngay
        </button>
      </div>
    </div>
  );
};

export default Ready;
