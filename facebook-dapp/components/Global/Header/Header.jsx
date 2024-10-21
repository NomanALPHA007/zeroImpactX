import React, { useState, useEffect } from "react";
import { BiHomeAlt, BiSolidVideo, BiUser, BiShoppingBag } from "react-icons/bi";

//INTERNAL IMPORT
import {
  HeaderAvatar,
  HeaderMenu,
  HeaderNotification,
  HeaderSearch,
  HeaderTheme,
  HeaderTop,
} from "./index";

const Header = ({
  INITAIL_CONTRACT,
  intrestedUsers,
  setActiveComponent,
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
  functionName,
  navbarActive,
  setNavbarActive,
  userAddress,
  setUserAddress,
  onHandleSearch,
  onClearSearch,
}) => {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setIsMetaMaskInstalled(true);

      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }

    return () => {
      if (typeof window.ethereum !== "undefined") {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
      }
    };
  }, [userAddress]);

  const handleAccountsChanged = (accounts) => {
    console.log("Accounts changed:", accounts[0]);
    const account = accounts[0];
    setUserAddress(account?.toLowerCase());
  };
  return (
    <div class="nav-header bg-white shadow-xs border-0">
      <HeaderTop
        functionName={functionName}
        setOpenSideChat={setOpenSideChat}
        openSideChat={openSideChat}
        setActiveComponent={setActiveComponent}
        navbarActive={navbarActive}
        setNavbarActive={setNavbarActive}
      />
      <HeaderSearch
        onHandleSearch={onHandleSearch}
        onClearSearch={onClearSearch}
      />
      <HeaderNotification
        setActiveComponent={setActiveComponent}
        intrestedUsers={intrestedUsers}
      />
      <HeaderTheme
        backgroundTheme={backgroundTheme}
        setBackgroundTheme={setBackgroundTheme}
        menuPostion={menuPostion}
        setMenuPostion={setMenuPostion}
        theme={theme}
        setTheme={setTheme}
        openTheme={openTheme}
        setOpenTheme={setOpenTheme}
        openSideChat={openSideChat}
        setOpenSideChat={setOpenSideChat}
      />
      <HeaderAvatar setActiveComponent={setActiveComponent} />
    </div>
  );
};

export default Header;
