import React from "react";

const Ready = () => {
  return (
    <div className="flex flex-col justify-center items-center pb-20 gap-2">
      <div className="bg-secondary w-80 h-36 items-center flex flex-col">
        <h6 className="font-body font-bold text-xl flex items-center text-white pt-7 pb-5">
          Bạn đã sẵn sàng thay đổi?
        </h6>
        <button className="bg-primary text-secondary flex flex-col items-start py-3 px-4 gap-11">
          Đăng ký ngay
        </button>
      </div>
    </div>
  );
};

export default Ready;
