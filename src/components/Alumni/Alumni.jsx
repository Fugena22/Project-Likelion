import React from "react";
import ArrowRightIcon from "../../assets/Icon/ArrowRightIcon";
import Ellipse from "../../assets/Icon/Ellipse";

const Alumni = () => {
  return (
    <div className="flex flex-col items-center py-20 px-4 gap-8">
      {/* Title */}
      <h5 className="font-body text-primary font-semibold text-2xl">
        Alumni Stories
      </h5>
      <div>
        <div className="flex flex-col items-center gap-8">
          {/* Image */}
          <img
            src="../../assets/315683023_3341948642749103_5559047794282828919_n.jpg"
            alt=""
            className="w-80 h-48"
          />
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-2">
              {/* Tag and name */}
              <p className="font-body text-xs flex items-center uppercase text-secondary tracking-wide">
                full-stack
              </p>
              <h5 className="font-body text-secondary font-semibold text-2xl flex items-center">
                Nguyễn Thanh Hương
              </h5>
            </div>
            {/* Text */}
            <p className="font-text text-xl flex items-center tracking-tight">
              “Mình cảm thấy khoá học tại LIKELION rất ok, rất quan tâm và luôn
              theo sát học viên. Giảng viên thì cực kỳ nhiệt tình, tận tâm,
              giảng giải từng li từng tí nên mình cảm thấy việc chọn học tại đây
              là đúng đắn ạ.”
            </p>
            {/* Link */}
            <div className="flex flex-row items-center gap-5">
              <ArrowRightIcon />
              <a
                href="#"
                className="font-body font-bold text-base flex items-center tracking-wide uppercase"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <Ellipse />
    </div>
  );
};

export default Alumni;
