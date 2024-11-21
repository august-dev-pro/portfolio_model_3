import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faLightbulb,
  faBriefcase,
  faEnvelope,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

// Tableau des éléments de la barre latérale avec des icônes différentes
const sideBarItems = [
  { label: "Home", icon: faHome, link: "#hero" },
  { label: "About Me", icon: faUser, link: "#about" },
  { label: "Skills & seervices", icon: faLightbulb, link: "#services&skills" },
  { label: "Portfolio", icon: faBriefcase, link: "#portfolio" },
  { label: "Contact Me", icon: faEnvelope, link: "#contact" },
  { label: "Download CV", icon: faFileDownload, link: "#resume" },
];
const socialLinks = [
  { icon: faFacebook, link: "#" },
  { icon: faInstagram, link: "#" },
  { icon: faLinkedin, link: "#" },
  { icon: faTwitter, link: "#" },
  { icon: faWhatsapp, link: "#" },
];

const SideBar = () => {
  return (
    <div className=" h-screen bg-gray-800 p-8 text-white flex flex-col gap-10">
      {/* En-tête */}
      <div className="uppercase">
        <h2 className="text-lg font-bold">webpress</h2>
      </div>

      <div className=" flex flex-col justify-between h-full">
        {/* Items de la barre latérale */}
        <div className="flex-1 space-y-4">
          {sideBarItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={`flex items-center gap-3 p-2 hover:text-pink-500 transition-all ${
                index < sideBarItems.length - 1
                  ? "border-b-gray-500 border-b"
                  : ""
              }`}
            >
              <FontAwesomeIcon icon={item.icon} className="text-xl" />
              <span className="text-base">{item.label}</span>
            </Link>
          ))}
        </div>
        {/* pied de age */}
        <div className="flex justify-between ">
          {socialLinks.map((item, index) => (
            <Link
              key={index}
              className=" hover:scale-[1.3] transition-all hover:text-pink-500"
              href={item.link}
            >
              <FontAwesomeIcon icon={item.icon} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
