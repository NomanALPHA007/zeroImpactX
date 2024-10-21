import React from "react";
import { MdOutlineNotificationsNone } from "react-icons/md";

import { shortenAddress } from "../../../utils/utils";

const Notification = ({ notification, index }) => (
  <div
    key={index + 1}
    class={`card bg-transparent-card w-100 border-0 ps-5 ${
      index == 3 ? "mb-0" : "mb-3"
    }`}
  >
    <img
      src={`images/user-${index + 1}.png`}
      alt="user"
      class="w40 position-absolute left-0"
    />
    <h5 class="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
      {notification.name}
      <span class="text-grey-400 font-xsssss fw-600 float-right mt-1">
        {new Date(notification.timeCreated * 1000).toDateString()}
      </span>
    </h5>
    <h6 class="text-grey-500 fw-500 font-xssss lh-4">
      {shortenAddress(notification.owner)} &nbsp; &nbsp; &nbsp; &nbsp;ID:{" "}
      {notification.userID}
    </h6>
  </div>
);

const HeaderNotification = ({ intrestedUsers, setActiveComponent }) => {
  const displyFollowing = [];

  intrestedUsers.map((item) => {
    if (item.owner == "0x0000000000000000000000000000000000000000") {
      console.log("delete iTem");
    } else {
      displyFollowing.push(item);
      // console.log(item);
    }
  });
  return (
    <>
      <a
        class="p-2 text-center ms-auto menu-icon"
        id="dropdownMenu3"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span class="dot-count bg-warning"></span>
        <i class=" font-xl text-current">
          <MdOutlineNotificationsNone />
        </i>
      </a>
      <div
        onClick={() => setActiveComponent("Message")}
        class="dropdown-menu dropdown-menu-end p-4 rounded-3 border-0 shadow-lg"
        aria-labelledby="dropdownMenu3"
      >
        <h4 class="fw-700 font-xss mb-4">Notification</h4>
        {displyFollowing
          .map((notification, index) => (
            <Notification notification={notification} index={index} />
          ))
          .slice(0, 5)}
      </div>
    </>
  );
};

export default HeaderNotification;
