import React from "react";
import "./Courses.css";

const Courses = () => {
  return (
    <div className="courses-container">
      <div className="courses-main">
        <h3 className="courses-text">
          Những khoá học của LIKELION giúp bạn thành công theo đuổi lập trình.
        </h3>
        <div className="courses-items">
          <ul className="courses-list">
            <li className="courses-item-1">
              <div className="item-title">
                <h4>FRONT-END</h4>
                <span>
                  Tạo ra giao diện người dùng thu hút và hoạt động hiệu quả.
                  Cung cấp kiến thức chuyên môn, kỹ năng thực chiến và portfolio
                  bạn cần để bắt đầu sự nghiệp lập trình viên Front-end.
                </span>
              </div>
              <div className="item-image">
                <img
                  src="../../assets/531e8270-80f7-4a24-b609-74b22079cdb4.png"
                  alt=""
                />
              </div>
              <div className="item-link"></div>
            </li>
            <li className="courses-item-2"></li>
            <li className="courses-item-3"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Courses;
