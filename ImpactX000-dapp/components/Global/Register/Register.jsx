import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineUserAdd,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineInfoCircle,
} from "react-icons/ai";

import { Input } from "./index";
import { shortenAddress } from "../../../utils/utils";

const register = ({
  CREATE_ACCOUNT,
  userAddress,
  connected,
  connectWallet,
}) => {
  const [formInput, updateFormInput] = useState({
    name: "",
  });

  return (
    <div class="color-theme-blue">
      <div class="main-wrap">
        <div class="row">
          <div
            class="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
            style={{ backgroundImage: "url(images/login-bg-2.jpg)" }}
          ></div>
          <div class="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
            <div class="card shadow-none border-0 ms-auto me-auto login-card">
              <div class="card-body rounded-0 text-left">
                <h2 class="fw-700 display1-size display2-md-size mb-4">
                  Create your account
                </h2>
                <div>
                  <Input
                    Icon={<AiOutlineUserAdd />}
                    placeholder={"Your name"}
                    handleClick={(e) =>
                      updateFormInput({ ...formInput, name: e.target.value })
                    }
                  />
                  <Input
                    Icon={<AiOutlineUserAdd />}
                    placeholder={shortenAddress(userAddress)}
                  />
                </div>

                <div class="col-sm-12 p-0 text-left">
                  <div class="form-group mb-1">
                    {connected === "CREATE_ACCOUNT" ? (
                      <a
                        onClick={() => CREATE_ACCOUNT(formInput)}
                        class="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0"
                      >
                        Register
                      </a>
                    ) : (
                      <a
                        onClick={() => connectWallet()}
                        class="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0"
                        data-bs-toggle="modal"
                        data-bs-target="#Modallogin"
                      >
                        Connect Wallet
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
