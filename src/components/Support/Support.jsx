import React from "react";

const Support = () => {
  return (
    <div className="flex flex-col items-start p-0 gap-2 bg-secondary">
      <div className="flex flex-col items-center px-0 py-8 gap-8">
        <p className="font-text text-xl flex items-center text-center tracking-tight text-white">
          Nếu bạn còn thắc mắc hay cần hỗ trợ thêm, hãy liên hệ ngay với
          LIKELION nhé. LIKELION đang làm việc hết công suất để phản hồi bạn
          trong thời gian sớm nhất. Cảm ơn bạn đã quan tâm đến những khoá học
          tại LIKELION nhé!
        </p>
        <button className="flex flex-col items-start px-4 py-2 gap-11 bg-primary order-1 uppercase">
          liên hệ tư vấn
        </button>
      </div>
    </div>
  );
};

export default Support;
