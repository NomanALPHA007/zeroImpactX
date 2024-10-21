import React from "react";

//INTERNAL IMPORT
import { shortenAddress } from "../../../utils/utils";

const MainFiendSliderTwo = ({ AppUsers, FOLLOW_USER }) => {
  return (
    <div class="card w-100 shadow-none bg-transparent bg-transparent-card border-0 p-0 mb-0">
      <div class="new_flex owl-theme overflow-hidden nav-none">
        {AppUsers.reverse().map((user, index) => (
          <div class="item" key={index + 1}>
            <div class="card w150 d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 me-2 mt-3">
              <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                <figure class="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1">
                  <img
                    src="images/user.png"
                    alt="image"
                    class="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                  />
                </figure>
                <div class="clearfix"></div>
                <h4 class="fw-700 font-xssss mt-3 mb-1">{user.name}</h4>
                <p class="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                  {shortenAddress(user.owner)}
                </p>
                <a
                  onClick={() => FOLLOW_USER(user.owner)}
                  class="text-center p-2 lh-20 w100 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white"
                >
                  FOLLOW
                </a>
              </div>
            </div>
          </div>
        ))}

        <div class="item">
          <div class="card w150 d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 me-2 mt-3">
            <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
              <figure class="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1">
                <img
                  src="images/user-8.png"
                  alt="image"
                  class="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                />
              </figure>
              <div class="clearfix"></div>
              <h4 class="fw-700 font-xssss mt-3 mb-1">Studio Express</h4>
              <p class="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                @macale343
              </p>
              <a
                href="#"
                class="text-center p-2 lh-20 w100 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white"
              >
                FOLLOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFiendSliderTwo;
