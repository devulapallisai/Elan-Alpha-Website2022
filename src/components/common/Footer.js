import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  const routes = [
    // [
    //   "FAQ",
    //   "https://drive.google.com/file/d/1BvVRbZtoR064aPIpblzlXxZ8balrG9rE/view",
    // ],
    // ["Register", "/"],
    ["Contact us", "/contact"],
  ];
  return (
    <>
      <div className="hidden md:grid grid-cols-2 p-8">
        <div
          className="flex flex-row justify-between"
          style={{ maxWidth: 200 }}
        >
          <a
            href="https://www.facebook.com/elan.iithyderabad/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-white text-3xl"
            />
          </a>
          <a
            href="https://www.instagram.com/elan_nvision.iith/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white text-3xl"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UC-D08t2esBoVTVOjlXUOxHA"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} className="text-white text-3xl" />
          </a>
          <a
            href="https://twitter.com/elan_nvision?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-white text-3xl" />
          </a>
        </div>
        <div className="flex justify-end">
          <div className="flex justify-between">
            {routes.reverse().map((route) => (
              <Link
                to={route[1]}
                className={`cursor-pointer font-bold text-2xl font-text text-headerwhite my-auto mx-2 lg:mx-4`}
              >
                {route[0]}
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/1BvVRbZtoR064aPIpblzlXxZ8balrG9rE/view"
              target="_blank"
              rel="noreferrer"
              className={`cursor-pointer font-bold text-2xl font-text text-headerwhite my-auto mx-2 lg:mx-4`}
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
      <div className="grid md:hidden grid-cols-2 ml-2">
        <div className="flex flex-col my-auto ml-4">
          <h2 className="text-sm sm:text-lg font-heading text-white">
            Social Media
          </h2>
          <br />
          <div className="flex flex-row-reverse justify-between w-[60px]">
            <a
              href="https://www.facebook.com/elan.iithyderabad/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="text-white text-xl"
              />
            </a>
            <a
              href="https://www.instagram.com/elan_nvision.iith/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white text-xl"
              />
            </a>
          </div>
          <div className="flex flex-row-reverse justify-between w-[60px]">
            <a
              href="https://www.youtube.com/channel/UC-D08t2esBoVTVOjlXUOxHA"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-white text-xl"
              />
            </a>
            <a
              href="https://twitter.com/elan_nvision?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-white text-xl"
              />
            </a>
          </div>
        </div>
        <div className="flex justify-end mr-4">
          <div className="flex justify-between flex-col-reverse">
            {routes.reverse().map((route) => (
              <Link
                to={route[1]}
                className={`cursor-pointer font-bold text-lg font-text text-headerwhite  m-1 lg:mx-4 align-right`}
              >
                {route[0]}
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/1BvVRbZtoR064aPIpblzlXxZ8balrG9rE/view"
              target="_blank"
              rel="noreferrer"
              className={`cursor-pointer font-bold text-lg font-text text-headerwhite  m-1 lg:mx-4 align-right`}
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
