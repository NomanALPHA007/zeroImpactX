import React, { useState } from "react";
import { MdOutlineAttachment } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";

//INTERNAL IMPORT
import { shortenAddress } from "../../../utils/utils";

const Message = ({
  intrestedUsers,
  setOpenChatModel,
  setSendUser,
  setSendAddress,
}) => {
  const displyFollowing = [];

  intrestedUsers.map((item) => {
    if (item.owner == "0x0000000000000000000000000000000000000000") {
      console.log("delete iTem");
    } else {
      displyFollowing.push(item);
      console.log(item);
    }
  });

  const [active, setActive] = useState();
  return (
    <div class="main-content right-chat-active">
      <div class="middle-sidebar-bottom">
        <div
          class="middle-sidebar-left pe-0 ps-lg-3 ms-0 me-0"
          style={{ maxWidth: "100%" }}
        >
          <div class="row">
            <div class="col-lg-12">
              <div class="chat-wrapper p-3 w-100 position-relative scroll-bar bg-white theme-dark-bg">
                <ul class="email-message">
                  {displyFollowing.map((user, index) => (
                    <li
                      key={index}
                      onClick={() => (
                        setOpenChatModel(true),
                        setSendAddress(user.owner),
                        setSendUser(user.name)
                      )}
                    >
                      <a
                        onClick={() => setActive(index)}
                        class={`rounded-3 ${
                          active == index ? "bg-lightblue" : ""
                        } theme-light-bg`}
                      >
                        <div class="form-check mt-1">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="blankCheckbox1"
                            value="option1"
                            aria-label=""
                          />
                          <label
                            class="text-grey-500 font-xssss"
                            for="blankCheckbox1"
                          ></label>
                        </div>
                        <div class="email-user">
                          <span class="btn-round-xss ms-0 bg-success me-2"></span>
                          <img
                            src="images/user.png"
                            alt="user"
                            class="w35 me-2 rounded-circle"
                          />
                          <h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">
                            {user.name}
                          </h6>
                        </div>
                        <div class="email-subject text-grey-900 text-dark fw-600 font-xssss">
                          <i class=" font-xss text-warning me-2">
                            <AiOutlineStar />
                          </i>
                          {shortenAddress(user.owner)}
                        </div>
                        <div class="email-text text-grey-500 fw-600 font-xssss">
                          Ckeck all the latest message form your firend{" "}
                          {user.name}
                        </div>
                        <span class="email-file">
                          <i class=" font-xss btn-round-sm text-grey-500 me-2 p-0">
                            <MdOutlineAttachment />
                          </i>
                        </span>
                        <div class="email-time text-grey-500 fw-600">
                          USERID: {user.userID}
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
