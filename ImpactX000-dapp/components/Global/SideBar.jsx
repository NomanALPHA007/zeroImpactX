import React from "react";
import Link from "next/link";
import {
  BiHomeAlt,
  BiSolidVideo,
  BiUser,
  BiShoppingBag,
  BiImage,
} from "react-icons/bi";
import { LiaCertificateSolid } from "react-icons/lia";
import { TbWorld } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { FiYoutube } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { PiChatsCircleFill } from "react-icons/pi";
import {
  MdOutlineMail,
  MdOutlineScreenshotMonitor,
  MdShareLocation,
  MdAnalytics,
  MdOutlineToken,
} from "react-icons/md";
import { Bs0Circle, BsAirplane } from "react-icons/bs";
import { GiShadowFollower } from "react-icons/gi";
import { SlUserFollowing } from "react-icons/sl";
import { shortenAddress } from "../../utils/utils";

const SideBar = ({
  setActiveComponent,
  message,
  backgroundTheme,
  menuPostion,
  navbarActive,
  pageType,
  userAddress,
  userAccount,
}) => {
  const sideBarMenu = [
    {
      name: "Newsfeed",
      icon: <MdOutlineScreenshotMonitor />,
    },
    {
      name: "TopUser",
      icon: <LiaCertificateSolid />,
    },
    {
      name: "ProductAds",
      icon: <TbWorld />,
    },
    {
      name: "Memberships",
      icon: <BiUser />,
    },
    {
      name: "AuthorProfile",
      icon: <BiUser />,
    },
  ];

  const morePageMenu = [
    {
      name: "Message",
      icon: <MdOutlineMail />,
    },
    {
      name: "Following",
      icon: <GiShadowFollower />,
    },
    {
      name: "Followers",
      icon: <SlUserFollowing />,
    },
    {
      name: "ERC20Tokens",
      icon: <Bs0Circle />,
    },
    {
      name: "NFTS",
      icon: <BsAirplane />,
    },
  ];

  const accountPage = [
    {
      name: "Media",
      icon: <BiImage />,
    },
    {
      name: "Video",
      icon: <BiSolidVideo />,
    },
    {
      name: "Setting",
      icon: <MdOutlineToken />,
    },
  ];

  return (
    <nav
      class={`navigation scroll-bar ${
        backgroundTheme ? "menu-current-color" : ""
      }  ${menuPostion ? "menu-active" : ""} ${
        navbarActive ? "nav-active" : ""
      }`}
    >
      <div class="container ps-0 pe-0">
        <div class="nav-content">
          <div class="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
            <div class="nav-caption fw-600 font-xssss text-grey-500">
              <span> {userAccount?.name} </span>
              Feeds
            </div>
            <ul class="mb-1 top-content">
              {sideBarMenu.map((menu, index) => (
                <li key={index + 1}>
                  <a
                    href={pageType == "details" ? "/" : `#${menu.name}`}
                    onClick={() => setActiveComponent(menu.name)}
                    class="nav-content-bttn open-font"
                  >
                    <i
                      class={` btn-round-md ${
                        index == 0
                          ? "bg-blue-gradiant"
                          : index == 1
                          ? "bg-red-gradiant"
                          : index == 2
                          ? "bg-gold-gradiant"
                          : index == 3
                          ? "bg-mini-gradiant"
                          : index == 4
                          ? "bg-primary-gradiant"
                          : ""
                      }  me-3`}
                    >
                      {menu.icon}
                    </i>
                    <span>{menu.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div class="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2">
            <div class="nav-caption fw-600 font-xssss text-grey-500">
              <span>Account </span>Overview
            </div>
            <ul class="mb-3">
              {morePageMenu.map((menu, index) => (
                <li key={index}>
                  <a
                    href={pageType == "details" ? "/" : `#${menu.name}`}
                    onClick={() => setActiveComponent(menu.name)}
                    class="nav-content-bttn open-font"
                  >
                    <i class="font-xl text-current  me-3">{menu.icon}</i>
                    <span>{menu.name}</span>
                    {index == 0 && (
                      <span class="circle-count bg-warning mt-1">
                        {message}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div class="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1">
            <div class="nav-caption fw-600 font-xssss text-grey-500">
              <span></span> Post Types
            </div>
            <ul class="mb-1">
              <li class="logo d-none d-xl-block d-lg-block"></li>
              {accountPage.map((menu, index) => (
                <li key={index}>
                  <a
                    href={pageType == "details" ? "/" : `#${menu.name}`}
                    onClick={() => setActiveComponent(menu.name)}
                    class="nav-content-bttn open-font h-auto pt-2 pb-2"
                  >
                    <i class="font-sm  me-3 text-grey-500">{menu.icon}</i>
                    <span>{menu.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
