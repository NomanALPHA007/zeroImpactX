import React from "react";
import { FiSettings } from "react-icons/fi";
import { PiChatsCircleFill } from "react-icons/pi";

const ThemeComponent = ({ target, title, handleClick }) => (
  <div class="card bg-transparent-card border-0 d-block mt-3">
    <h4 class="d-inline font-xssss mont-font fw-700">{title}</h4>
    <div class="d-inline float-right mt-1">
      <label class={`toggle ${target}`}>
        <input type="checkbox" onClick={handleClick} />
        <span class="toggle-icon"></span>
      </label>
    </div>
  </div>
);

const IconComponent = ({ icon, styleClass }) => (
  <i class={`font-xl text-current ${styleClass}`}>{icon}</i>
);

const HeaderTheme = ({
  setOpenSideChat,
  openSideChat,
  openTheme,
  setOpenTheme,
  setTheme,
  theme,
  menuPostion,
  setMenuPostion,
  backgroundTheme,
  setBackgroundTheme,
}) => {
  return (
    <>
      <a
        onClick={() =>
          openSideChat ? setOpenSideChat(false) : setOpenSideChat(true)
        }
        class="p-2 text-center ms-3 menu-icon chat-active-btn"
      >
        <IconComponent icon={<PiChatsCircleFill />} />
      </a>

      <div class="p-2 text-center ms-3 position-relative dropdown-menu-icon menu-icon cursor-pointer">
        <span
          onClick={() => (openTheme ? setOpenTheme(false) : setOpenTheme(true))}
        >
          <IconComponent
            icon={<FiSettings />}
            styleClass={"animation-spin d-inline-block"}
          />
        </span>

        <div
          class={`dropdown-menu-settings switchcolor-wrap ${
            openTheme ? "active" : ""
          }`}
        >
          <h4 class="fw-700 font-sm mb-4">Settings</h4>

          <ThemeComponent
            target={"toggle-menu-color"}
            title={"Header Background"}
            handleClick={() =>
              backgroundTheme
                ? setBackgroundTheme(false)
                : setBackgroundTheme(true)
            }
          />

          <ThemeComponent
            target={"toggle-menu"}
            title={"Menu Position"}
            handleClick={() =>
              menuPostion ? setMenuPostion(false) : setMenuPostion(true)
            }
          />
          <ThemeComponent
            handleClick={() => (theme ? setTheme(false) : setTheme(true))}
            target={"toggle-dark"}
            title={"Dark Mode"}
          />
        </div>
      </div>
    </>
  );
};

export default HeaderTheme;
