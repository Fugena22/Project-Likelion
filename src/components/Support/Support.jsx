import React from "react";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="flex flex-col items-start p-0 gap-2 px-4 pb-20">
      <div className="flex flex-col items-center px-0 py-8 gap-8 bg-secondary">
        <p className="font-text text-xl flex items-center text-center tracking-tight text-white">
          Nếu bạn còn thắc mắc hay cần hỗ trợ thêm, hãy liên hệ ngay với
          LIKELION nhé. LIKELION đang làm việc hết công suất để phản hồi bạn
          trong thời gian sớm nhất. Cảm ơn bạn đã quan tâm đến những khoá học
          tại LIKELION nhé!
        </p>
        <button className="flex flex-col items-start px-4 py-2 gap-11 bg-primary order-1">
          <Link to="/">
            <p className="font-body font-bold text-base flex items-center tracking-wide uppercase">
              Liên hệ tư vấn
            </p>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Support;
