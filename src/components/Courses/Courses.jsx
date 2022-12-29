import React from "react";
import ArrowRightIcon from "../../assets/Icon/ArrowRightIcon";

const Courses = () => {
  return (
    <div className="flex flex-col items-center gap-14 sm:py-20 md:py-40">
      {/* Tablet Title */}
      <div className="md:flex md:flex-col md:items-center md:gap-12 sm:hidden">
        <h3 className="md:font-body md:font-bold md:text-5xl md:flex md:items-center md:text-center md:text-primary sm:hidden">
          Những khoá học của LIKELION giúp bạn thành công theo đuổi lập trình.
        </h3>

        <div className="flex flex-col items-center px-8 gap-28">
          <div className="flex flex-row items-center gap-8">
            <div className="flex flex-col items-end gap-4">
              <div className="flex flex-row justify-center items-center gap-2">
                <h4 className="flex items-center font-body font-semibold text-secondary text-4xl">
                  FRONT-END
                </h4>
              </div>
              <p className="font-text text-xl flex items-center text-right tracking-tight">
                Tạo ra giao diện người dùng thu hút và hoạt động hiệu quả. Cung
                cấp kiến thức chuyên môn, kỹ năng thực chiến và portfolio bạn
                cần để bắt đầu sự nghiệp lập trình viên Front-end.
              </p>
              <div className="flex flex-row items-center gap-6">
                <ArrowRightIcon />
                <button className="font-body font-bold text-base flex items-center uppercase text-black">
                  Các khoá học
                </button>
              </div>
            </div>
            <div>
              <img
                src="../../assets/531e8270-80f7-4a24-b609-74b22079cdb4.png"
                alt=""
                className="w-80 h-80"
              />
            </div>
          </div>

          <div className="flex flex-row-reverse items-center gap-8">
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-row justify-center items-center gap-2">
                <h4 className="flex items-center font-body font-semibold text-secondary text-4xl">
                  BACK-END
                </h4>
              </div>
              <p className="font-text text-xl flex items-center text-left tracking-tight">
                Xây dựng server xử lý và lưu trữ dữ liệu. Tập trung vào cơ sở dữ
                liệu, logic, các chương trình - những thứ người dùng không thể
                nhìn thấy ở giao diện website.
              </p>
              <div className="flex flex-row items-center gap-6">
                <ArrowRightIcon />
                <button className="font-body font-bold text-base flex items-center uppercase text-black">
                  Các khoá học
                </button>
              </div>
            </div>
            <div>
              <img
                src="../../assets/315683023_3341948642749103_5559047794282828919_n.jpg"
                alt=""
                className="w-80 h-80"
              />
            </div>
          </div>

          <div className="flex flex-row items-center gap-8">
            <div className="flex flex-col items-end gap-4">
              <div className="flex flex-row justify-center items-center gap-2">
                <h4 className="flex items-center font-body font-semibold text-secondary text-4xl">
                  FULL-STACK
                </h4>
              </div>
              <p className="font-text text-xl flex items-center text-right tracking-tight">
                Mô hình học Bootcamp hiện đại với cường độ cao mang đến mọi thứ
                bạn cần để trở thành một lập trình viên Full-stack. Từ con số 0
                đến thành thạo lập trình chỉ trong 3 tháng.
              </p>
              <div className="flex flex-row items-center gap-6">
                <ArrowRightIcon />
                <button className="font-body font-bold text-base flex items-center uppercase text-black">
                  Các khoá học
                </button>
              </div>
            </div>
            <div>
              <img
                src="../../assets/315683023_3341948642749103_5559047794282828919_n.jpg"
                alt=""
                className="w-80 h-80"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Title */}
      <h5 className="text-primary font-semibold text-2xl flex items-center md:hidden">
        Mục tiêu của bạn là gì?
      </h5>

      {/* Mobile Items */}
      <div className="flex flex-col items-center px-4 gap-6 md:hidden">
        <div className="w-80 h-80 flex relative">
          {/* Image */}
          <img
            src="../../assets/531e8270-80f7-4a24-b609-74b22079cdb4.png"
            alt=""
            className="w-80 h-80 absolute"
          />
        </div>
        {/* Title and text */}
        <div className="flex flex-col items-start gap-4">
          <h5 className="flex items-center text-2xl font-semibold text-secondary font-body hover:flex hover:flex-row hover:justify-center hover:items-center hover:gap-2">
            FRONT-END
          </h5>
          <p className="font-text text-xl">
            Tạo ra giao diện người dùng thu hút và hoạt động hiệu quả. Cung cấp
            kiến thức chuyên môn, kỹ năng thực chiến và portfolio bạn cần để bắt
            đầu sự nghiệp lập trình viên Front-end.
          </p>
          {/* Link */}
          <div className="flex flex-row items-center gap-5">
            <ArrowRightIcon />
            <button className="font-text font-bold text-base flex items-center uppercase">
              Các khoá học
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-4 gap-6 md:hidden">
        {/* Image */}
        <img
          src="../../assets/531e8270-80f7-4a24-b609-74b22079cdb4.png"
          alt=""
          className="w-80 h-80 items-center"
        />
        <div className="flex flex-col items-start gap-4">
          {/* Title and text */}
          <h5 className="flex items-center text-2xl font-semibold text-secondary font-body hover:flex hover:flex-row hover:justify-center hover:items-center hover:gap-2">
            BACK-END
          </h5>
          <p className="font-text text-xl">
            Xây dựng server xử lý và lưu trữ dữ liệu. Tập trung vào cơ sở dữ
            liệu, logic, các chương trình - những thứ người dùng không thể nhìn
            thấy ở giao diện website.
          </p>
          {/* Link */}
          <div className="flex flex-row items-center gap-5">
            <ArrowRightIcon />
            <button className="font-text font-bold text-base flex items-center uppercase">
              Các khoá học
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-4 gap-6 md:hidden">
        {/* Image */}
        <img
          src="../../assets/531e8270-80f7-4a24-b609-74b22079cdb4.png"
          alt=""
          className="w-80 h-80 items-center"
        />
        <div className="flex flex-col items-start gap-4">
          {/* Title and text */}
          <h5 className="flex items-center text-2xl font-semibold text-secondary font-body hover:flex hover:flex-row hover:justify-center hover:items-center hover:gap-2">
            FULL-STACK
          </h5>
          <p className="font-text text-xl">
            Mô hình học Bootcamp hiện đại với cường độ cao mang đến mọi thứ bạn
            cần để trở thành một lập trình viên Full-stack. Từ con số 0 đến
            thành thạo lập trình chỉ trong 3 tháng.
          </p>
          {/* Link */}
          <div className="flex flex-row items-center gap-5">
            <ArrowRightIcon />
            <button className="font-text font-bold text-base flex items-center uppercase">
              Các khoá học
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
