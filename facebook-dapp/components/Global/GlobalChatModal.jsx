import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";

import { shortenAddress } from "../../utils/utils";
import { BtnLoader } from "./MainBody/index";

const ChatModal = ({
  openChatModel,
  setOpenChatModel,
  sendAddress,
  sendUser,
  READ_MESSAGE,
  userAddress,
  SEND_MESSAGE,
  loader,
  count,
}) => {
  const [messageHistory, setMessageHistory] = useState([]);

  useEffect(() => {
    READ_MESSAGE(sendAddress).then((message) => {
      setMessageHistory(message);
    });
  }, [sendAddress, sendUser, count]);

  const [message, setMessage] = useState("");
  console.log("Hey");
  return (
    <div class={`modal-popup-chat ${openChatModel ? "d-block" : ""}`}>
      <div class="modal-popup-wrap bg-white p-0 shadow-lg rounded-3">
        <div class="modal-popup-header w-100 border-bottom">
          <div class="card p-3 d-block border-0 d-block">
            <figure class="avatar mb-0 float-left me-2">
              <img src="images/user-12.png" alt="image" class="w35 me-1" />
            </figure>
            <h5 class="fw-700 text-primary font-xssss mt-1 mb-1">{sendUser}</h5>

            <div className="new_class_flex">
              <h4 class="text-grey-500 font-xsssss mt-0 mb-0">
                <span class="d-inline-block bg-success btn-round-xss m-0"></span>
                {shortenAddress(sendAddress)}
              </h4>
              <i class=" text-grey-900 mt-2 d-inline-block">
                <AiOutlineClose onClick={() => setOpenChatModel(false)} />
              </i>
            </div>
          </div>
        </div>
        <div class="modal-popup-body w-100 p-3 new_chat_modal">
          {loader && <BtnLoader />}

          {messageHistory?.map((message, index) => (
            <>
              {message.sender.toLowerCase() == userAddress.toLowerCase() ? (
                <>
                  <div class="message">
                    <div class="message-content font-xssss lh-24 fw-500">
                      {message.message}
                    </div>
                  </div>
                  <div class="date-break font-xsssss lh-24 fw-500 text-grey-500 mt-2 mb-2">
                    {new Date(message.timestamp * 1000).toDateString()}
                  </div>
                </>
              ) : (
                <>
                  <div class="message self text-right mt-2">
                    <div class="message-content font-xssss lh-24 fw-500">
                      {message.message}
                    </div>
                  </div>

                  <div class="font-xsssss lh-24 fw-500 text-grey-500   float-right">
                    {new Date(message.timestamp * 1000).toDateString()}
                  </div>
                  <div class="clearfix"></div>
                </>
              )}
            </>
          ))}
        </div>
        <div class="modal-popup-footer w-100 border-top">
          <div class="card p-3 d-block border-0 d-block">
            <div class="form-group icon-right-input style1-input mb-0">
              <input
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                placeholder="Start typing.."
                class="form-control rounded-xl bg-greylight border-0 font-xssss fw-500 ps-3"
              />
              <i
                class=" text-grey-500 font-md"
                onClick={() => SEND_MESSAGE(sendAddress, message)}
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

export default ChatModal;
