import React from "react";
import ArrowDownIcon from "../../assets/Icon/ArrowDownIcon";
import FacebookIcon from "../../assets/Icon/FacebookIcon";
import InstagramIcon from "../../assets/Icon/InstagramIcon";
import LinkinIcon from "../../assets/Icon/LinkinIcon";
import Logo from "../../assets/Icon/Logo";
import YoutubeIcon from "../../assets/Icon/YoutubeIcon";

const Footer = () => {
  return (
    <div className="bg-secondary flex flex-col items-center pt-20 px-4 pb-10 gap-6">
      <div className="flex flex-col items-center gap-6">
        <Logo />
        <div className="flex flex-col items-start gap-2">
          <p className="font-text text-xl flex items-center text-white">
            76A Lê Lai, phường Bến Thành, Quận 1, TP.Hồ Chí Minh
          </p>
          <p className="font-text text-xl flex items-center text-white">
            likelion.vn@likelion.net
          </p>
          <p className="font-text text-xl flex items-center text-white">
            (+84) 867 133 779
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-row justify-between items-center gap-3">
            <p className="font-body font-bold text-xl flex items-center text-white">
              COMPANY
            </p>
            <ArrowDownIcon />
          </div>
          <div className="flex flex-row justify-between items-center gap-3">
            <p className="font-body font-bold text-xl flex items-center text-white">
              KHOÁ HỌC
            </p>
            <ArrowDownIcon />
          </div>
        </div>
        <div className="flex flex-row justify-center items-start gap-6">
          <FacebookIcon />
          <InstagramIcon />
          <LinkinIcon />
          <YoutubeIcon />
        </div>
      </div>
      <div className="flex flex-col items-center px-4 pb-4 gap-8">
        <p className="font-body font-medium text-xs flex items-center text-center text-white">
          © 2022 LIKELION. All Rights Reserved. Terms and Conditions. Privacy
          Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
