import React from "react";
import { BiHomeAlt, BiSolidVideo, BiUser, BiShoppingBag } from "react-icons/bi";

const GlobalAppFooter = ({ setActiveComponent }) => {
  return (
    <div class="app-footer border-0 shadow-lg bg-primary-gradiant">
      <a
        onClick={() => setActiveComponent("Newsfeed")}
        class="nav-content-bttn nav-center"
      >
        <i class="">
          <BiHomeAlt />
        </i>
      </a>
      <a
        onClick={() => setActiveComponent("Top User")}
        class="nav-content-bttn"
      >
        <i class="">
          <BiUser />
        </i>
      </a>
      <a
        onClick={() => setActiveComponent("Memberships")}
        class="nav-content-bttn"
        data-tab="chats"
      >
        <i class="">
          <BiShoppingBag />
        </i>
      </a>
      <a onClick={() => setActiveComponent("Video")} class="nav-content-bttn">
        <i class="">
          <BiSolidVideo />
        </i>
      </a>
      <a
        onClick={() => setActiveComponent("Author Profile")}
        class="nav-content-bttn"
      >
        <img
          src="images/female-profile.png"
          alt="user"
          class="w30 shadow-xss"
        />
      </a>
    </div>
  );
};

export default GlobalAppFooter;
