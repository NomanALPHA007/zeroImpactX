import React, { useState, useEffect } from "react";

//INTERNAL IMPORT
import {
  RightChatContact,
  RightChatGroups,
  RightChatPages,
  RightChatPreloader,
} from "./index";

const RightChat = ({
  userFollowing,
  intrestedUsers,
  setOpenChatModel,
  setSendUser,
  setSendAddress,
  memberGroups,
  setGroupChatName,
  setGroupDescription,
  setGroupChatID,
  setOpenGroupChatModel,
  openSideChat,
}) => {
  return (
    <div
      class={`right-chat nav-wrap mt-2 right-scroll-bar ${
        openSideChat ? "active-sidebar" : ""
      }`}
    >
      <div class="middle-sidebar-right-content bg-white shadow-xss rounded-xxl">
        {/* <!-- loader wrapper --> */}
        {/* <RightChatPreloader /> */}
        {/* <!-- loader wrapper --> */}
        <RightChatContact
          userFollowing={userFollowing}
          setOpenChatModel={setOpenChatModel}
          setSendUser={setSendUser}
          setSendAddress={setSendAddress}
        />
        <RightChatGroups
          intrestedUsers={intrestedUsers}
          setOpenChatModel={setOpenChatModel}
          setSendUser={setSendUser}
          setSendAddress={setSendAddress}
        />
        <RightChatPages
          memberGroups={memberGroups}
          setGroupChatName={setGroupChatName}
          setGroupDescription={setGroupDescription}
          setGroupChatID={setGroupChatID}
          setOpenGroupChatModel={setOpenGroupChatModel}
        />
      </div>
    </div>
  );
};

export default RightChat;
