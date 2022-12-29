import React from "react";
import ArrowDownIcon from "../../assets/Icon/ArrowDownIcon";
import FacebookIcon from "../../assets/Icon/FacebookIcon";
import InstagramIcon from "../../assets/Icon/InstagramIcon";
import LinkinIcon from "../../assets/Icon/LinkinIcon";
import Logo from "../../assets/Icon/Logo";
import YoutubeIcon from "../../assets/Icon/YoutubeIcon";

const Footer = () => {
  return (
    <div className="bg-secondary flex flex-col items-center pt-20 sm:px-4 md:px-8 pb-10 sm:gap-6 md:gap-14">
      {/* Tablet */}
      <div className="md:flex md:flex-row md:justify-between md:items-start md:gap-12 sm:hidden">
        <div className="flex flex-col items-start gap-6">
          <Logo />
          <div className="flex flex-col items-start gap-4">
            <p className="font-text text-xl flex items-center tracking-tight text-white">
              76A Lê Lai, phường Bến Thành, Quận 1, TP.Hồ Chí Minh
            </p>
            <p className="font-text text-xl flex items-center tracking-tight text-white">
              likelion.vn@likelion.net
            </p>
            <p className="font-text text-xl flex items-center tracking-tight text-white">
              (+84) 867 133 779
            </p>
          </div>
          <div className="flex flex-row items-start gap-6">
            <FacebookIcon />
            <InstagramIcon />
            <LinkinIcon />
            <YoutubeIcon />
          </div>
        </div>
        <div className="flex flex-row items-start gap-8">
          <div className="flex flex-col items-start gap-9">
            <span className="flex flex-row justify-center items-center gap-2">
              <h6 className="font-body font-bold text-xl flex items-center text-white">
                Company
              </h6>
            </span>
            <ul className="flex flex-col items-start gap-2">
              <li className="flex flex-row justify-center items-center gap-2">
                <a
                  href="#"
                  className="font-text text-xl flex items-center tracking-tight text-white"
                >
                  About
                </a>
              </li>
              <li className="flex flex-row justify-center items-center gap-2">
                <a
                  href=""
                  className="font-text text-xl flex items-center tracking-tight text-white"
                >
                  Blog
                </a>
              </li>
              <li className="flex flex-row justify-center items-center gap-2">
                <a
                  href=""
                  className="font-text text-xl flex items-center tracking-tight text-white"
                >
                  Careers
                </a>
              </li>
              <li className="flex flex-row justify-center items-center gap-2">
                <a
                  href=""
                  className="font-text text-xl flex items-center tracking-tight text-white"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-9">
            <span className="flex flex-row justify-center items-center gap-2">
              <h6 className="font-body font-bold text-xl flex items-center text-white">
                Khoá học
              </h6>
            </span>
            <ul className="flex flex-col items-start gap-2">
              <li className="flex flex-row justify-center items-center gap-2">
                <a
                  href="#"
                  className="font-text text-xl flex items-center tracking-tight text-white"
                >
                  Front-end
                </a>
              </li>
              <li className="flex flex-row justify-center items-center gap-2">
                <a
                  href="#"
                  className="font-text text-xl flex items-center tracking-tight text-white"
                >
                  Back-end
                </a>
              </li>
              <li className="flex flex-row justify-center items-center gap-2">
                <a
                  href="#"
                  className="font-text text-xl flex items-center tracking-tight text-white"
                >
                  Full-stack
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="ms:flex ms:flex-col ms:items-center ms:gap-6 md:hidden">
        {/* Logo */}
        <Logo />

        {/* Contact */}
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

        {/* Link */}
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

        {/* Media */}
        <div className="flex flex-row justify-center items-start gap-6">
          <FacebookIcon />
          <InstagramIcon />
          <LinkinIcon />
          <YoutubeIcon />
        </div>
      </div>

      {/* Private */}
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
