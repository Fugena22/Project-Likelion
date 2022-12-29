import React from "react";

const Video = () => {
  return (
    <div className="flex flex-col items-center sm:py-20 sm:px-4 sm:gap-14 md:py-40 md:px-8 md:gap-2 bg-secondary">
      {/* Tablet */}
      <div className="md:flex md:flex-col md:items-start md:gap-14 sm:hidden">
        <div className="flex flex-col items-start gap-6">
          <h3 className="text-primary font-body font-bold text-5xl">
            Bạn sẽ học như thế nào?
          </h3>
          <p className="font-text text-xl flex items-center tracking-tight text-white">
            Take your future into your own hands and discover your potential.
          </p>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col items-start gap-4 md:hidden">
        {/* Title and text */}
        <h5 className="text-primary font-body font-semibold text-2xl">
          Học tại LIKELION
        </h5>
        <p className="font-text text-white text-xl flex items-center">
          Take your future into your own hands and discover your potential.
        </p>
      </div>
      {/* Video Frame */}
      <div className="bg-gray w-80 h-44"></div>
    </div>
  );
};

export default Video;
