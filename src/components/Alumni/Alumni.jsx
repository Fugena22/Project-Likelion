import React from "react";
import ArrowRightIcon from "../../assets/Icon/ArrowRightIcon";
import Ellipse from "../../assets/Icon/Ellipse";

const Alumni = () => {
  return (
    <div className="flex flex-col items-center sm:py-20 sm:px-4 sm:gap-8 md:py-40 gap-20">
      {/* Title */}
      {/* Tablet */}
      <h3 className="md:font-body md:text-primary md:items-center md:font-bold md:text-5xl sm:hidden">
        Alumni Stories
      </h3>

      {/* Mobile */}
      <h5 className="font-body text-primary font-semibold text-2xl md:hidden">
        Alumni Stories
      </h5>
      <div>
        <div className="flex flex-col sm:items-center sm:gap-8 md:items-start md:gap-4">
          {/* Image */}
          <img
            src="../../assets/315683023_3341948642749103_5559047794282828919_n.jpg"
            alt=""
            className="w-80 h-48"
          />
          <div className="flex flex-col items-start sm:gap-4 md:py-4 md:gap-5">
            <div className="flex flex-col items-start sm:gap-2 md:pr-16">
              {/* Tag and name */}
              {/* Tablet */}
              <p className="md:font-body md:text-base md:text-black md:flex md:items-center md:tracking-wide md:uppercase sm:hidden">
                full-stack web developer bootcamp 2
              </p>
              {/* Mobile */}
              <p className="font-body text-xs flex items-center uppercase text-secondary tracking-wide md:hidden">
                full-stack
              </p>
              {/* Tablet */}
              <h4 className="md:font-body md:font-semibold md:text-3xl md:flex md:items-center md:tracking-wide md:text-black sm:hidden">
                Nguyễn Thanh Hương
              </h4>
              {/* Mobile */}
              <h5 className="font-body text-secondary font-semibold text-2xl flex items-center md:hidden">
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
