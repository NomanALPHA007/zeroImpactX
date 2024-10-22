import React from "react";

const HeaderAvatar = ({ setActiveComponent }) => {
  return (
    <a
      href="#AuthorProfile"
      onClick={() => setActiveComponent("AuthorProfile")}
      class="p-0 ms-3 menu-icon"
    >
      <img
        src="images/female-profile.png"
        alt="user"
        class="w40 mt--1 rounded-circle"
      />
    </a>
  );
};

export default HeaderAvatar;
