import React from "react";

const HeaderMenu = ({ menu, index }) => {
  return (
    <a
      href={menu.link}
      class={`p-2 text-center ${
        index == 0 ? "ms-3" : "ms-0"
      }  menu-icon center-menu-icon`}
    >
      <i class="font-lg alert-primary btn-round-lg theme-dark-bg text-current">
        {menu.icon}
      </i>
    </a>
  );
};

export default HeaderMenu;
