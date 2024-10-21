import React from "react";
import { PiChatsCircleFill } from "react-icons/pi";
import { BsSearch, BsCameraVideo } from "react-icons/bs";

const IconComponent = ({ icon }) => (
  <i class=" text-grey-900 font-sm btn-round-md bg-greylight">{icon}</i>
);

const NavTop = ({
  functionName,
  setOpenSideChat,
  openSideChat,
  setActiveComponent,
  navbarActive,
  setNavbarActive,
}) => {
  return (
    <div class="nav-top">
      <a onClick={() => functionName()}>
        {/* <a href="/"> */}
        <i class="feather-zap text-success display1-size me-2 ms-0"></i>
        <span class="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
          TBCoders.
        </span>
      </a>
      <a
        onClick={() =>
          openSideChat ? setOpenSideChat(false) : setOpenSideChat(true)
        }
        class="mob-menu ms-auto me-2 chat-active-btn"
      >
        <IconComponent icon={<PiChatsCircleFill />} />
      </a>
      <a onClick={() => setActiveComponent("Video")} class="mob-menu me-2">
        <IconComponent icon={<BsCameraVideo />} />
      </a>

      <button
        onClick={() =>
          navbarActive ? setNavbarActive(false) : setNavbarActive(true)
        }
        class="nav-menu me-0 ms-2"
      ></button>
    </div>
  );
};

export default NavTop;
