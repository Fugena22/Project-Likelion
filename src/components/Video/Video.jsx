import React from "react";

const Video = () => {
  return (
    <div className="flex flex-col items-center py-20 px-4 gap-14 bg-secondary">
      <div className="flex flex-col items-start gap-4">
        <h5 className="text-primary font-body font-semibold text-2xl">
          Học tại LIKELION
        </h5>
        <p className="font-text text-white text-xl flex items-center">
          Take your future into your own hands and discover your potential.
        </p>
      </div>
      <div className="bg-gray w-80 h-44"></div>
    </div>
  );
};

export default Video;
