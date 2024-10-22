import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";

import { BtnLoader } from "../MainBody/index";

const GroupChat = ({
  groupChatName,
  groupDescription,
  groupChatID,
  userAddress,
  openGroupChatModel,
  setOpenGroupChatModel,
  GET_GROUP_MESSAGE,
  SEND_GROUP_MESSAGE,
  loader,
  count,
}) => {
  const [messageHistory, setMessageHistory] = useState([]);
  const [groupMessage, setGroupMessage] = useState("");

  useEffect(() => {
    GET_GROUP_MESSAGE(groupChatID).then((message) => {
      setMessageHistory(message);
    });
  }, [groupChatID, groupChatName, count]);

  const displyGroupMessage = [];

  messageHistory?.map((item) => {
    if (item == "") {
      return;
    } else {
      displyGroupMessage.push(item);
      console.log(item);
    }
  });

  return (
    <div class={`modal-popup-chat ${openGroupChatModel ? "d-block" : ""}`}>
      <div class="modal-popup-wrap bg-white p-0 shadow-lg rounded-3">
        <div class="modal-popup-header w-100 border-bottom">
          <div class="card p-3 d-block border-0 d-block">
            <figure class="avatar mb-0 float-left me-2">
              <img src="images/user-12.png" alt="image" class="w35 me-1" />
            </figure>
            <h5 class="fw-700 text-primary font-xssss mt-1 mb-1">
              {groupChatName}
            </h5>

            <div className="new_class_flex">
              <h4 class="text-grey-500 font-xsssss mt-0 mb-0">
                <span class="d-inline-block bg-success btn-round-xss m-0"></span>
                {groupDescription?.slice(0, 75)}...
              </h4>
              <i class=" text-grey-900 mt-2 d-inline-block">
                <AiOutlineClose onClick={() => setOpenGroupChatModel(false)} />
              </i>
            </div>
          </div>
        </div>
        <div class="modal-popup-body w-100 p-3 new_chat_modal">
          {loader && <BtnLoader />}
          {displyGroupMessage?.map((message, index) => (
            <>
              <div class="message self text-right mt-2">
                <div class="message-content font-xssss lh-24 fw-500">
                  {message}
                </div>
              </div>

              <div class="font-xsssss lh-24 fw-500 text-grey-500   float-right">
                MESSAGE ID: {index + 1}
              </div>
              <div class="clearfix"></div>
            </>
          ))}
        </div>
        <div class="modal-popup-footer w-100 border-top">
          <div class="card p-3 d-block border-0 d-block">
            <div class="form-group icon-right-input style1-input mb-0">
              <input
                onChange={(e) => setGroupMessage(e.target.value)}
                type="text"
                placeholder="Start typing.."
                class="form-control rounded-xl bg-greylight border-0 font-xssss fw-500 ps-3"
              />
              <i
                class=" text-grey-500 font-md"
                onClick={() => SEND_GROUP_MESSAGE(groupChatID, groupMessage)}
              >
                <BsFillSendFill />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupChat;
