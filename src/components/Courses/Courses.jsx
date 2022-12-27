import React from "react";
import ArrowRightIcon from "../../assets/Icon/ArrowRightIcon";

const Courses = () => {
  return (
    <div className="flex flex-col items-center py-20 gap-14">
      <h5 className="text-primary font-semibold text-2xl flex items-center">
        Mục tiêu của bạn là gì?
      </h5>
      <div className="flex flex-col items-center px-4 gap-6">
        <div className="w-80 h-80 flex relative">
          <img
            src="../../assets/531e8270-80f7-4a24-b609-74b22079cdb4.png"
            alt=""
            className="w-80 h-80 absolute"
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <h5 className="flex items-center text-2xl font-semibold text-secondary font-body hover:flex hover:flex-row hover:justify-center hover:items-center hover:gap-2">
            FRONT-END
          </h5>
          <p className="font-text text-xl">
            Tạo ra giao diện người dùng thu hút và hoạt động hiệu quả. Cung cấp
            kiến thức chuyên môn, kỹ năng thực chiến và portfolio bạn cần để bắt
            đầu sự nghiệp lập trình viên Front-end.
          </p>
          <div className="flex flex-row items-center gap-5">
            <ArrowRightIcon />
            <a
              href="#"
              className="font-text font-bold text-base flex items-center uppercase"
            >
              Các khoá học
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-4 gap-6">
        <img
          src="../../assets/531e8270-80f7-4a24-b609-74b22079cdb4.png"
          alt=""
          className="w-80 h-80 items-center"
        />
        <div className="flex flex-col items-start gap-4">
          <h5 className="flex items-center text-2xl font-semibold text-secondary font-body hover:flex hover:flex-row hover:justify-center hover:items-center hover:gap-2">
            BACK-END
          </h5>
          <p className="font-text text-xl">
            Xây dựng server xử lý và lưu trữ dữ liệu. Tập trung vào cơ sở dữ
            liệu, logic, các chương trình - những thứ người dùng không thể nhìn
            thấy ở giao diện website.
          </p>
          <div className="flex flex-row items-center gap-5">
            <ArrowRightIcon />
            <a
              href="#"
              className="font-text font-bold text-base flex items-center uppercase"
            >
              Các khoá học
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-4 gap-6">
        <img
          src="../../assets/531e8270-80f7-4a24-b609-74b22079cdb4.png"
          alt=""
          className="w-80 h-80 items-center"
        />
        <div className="flex flex-col items-start gap-4">
          <h5 className="flex items-center text-2xl font-semibold text-secondary font-body hover:flex hover:flex-row hover:justify-center hover:items-center hover:gap-2">
            FULL-STACK
          </h5>
          <p className="font-text text-xl">
            Mô hình học Bootcamp hiện đại với cường độ cao mang đến mọi thứ bạn
            cần để trở thành một lập trình viên Full-stack. Từ con số 0 đến
            thành thạo lập trình chỉ trong 3 tháng.
          </p>
          <div className="flex flex-row items-center gap-5">
            <ArrowRightIcon />
            <a
              href="#"
              className="font-text font-bold text-base flex items-center uppercase"
            >
              Các khoá học
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
