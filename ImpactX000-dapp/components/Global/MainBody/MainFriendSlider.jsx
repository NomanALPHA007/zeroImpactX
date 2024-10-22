import React from "react";

//INTERNAL IMPORT
import { shortenAddress } from "../../../utils/utils";

const MainFriendSlider = ({ AppUsers }) => {
  return (
    <div class="card w-100 shadow-none bg-transparent bg-transparent-card border-0 p-0 mb-0">
      <div class="new_flex owl-theme overflow-hidden nav-none">
        {AppUsers.map((user, index) => (
          <div class="item">
            <div class="card w200 d-block border-0 shadow-xss rounded-xxl overflow-hidden mb-3 me-2 mt-3">
              <div
                class="card-body position-relative h100 bg-image-cover bg-image-center"
                style={{ backgroundImage: "url(images/u-bg.jpg)" }}
              ></div>
              <div class="card-body d-block w-100 ps-4 pe-4 pb-4 text-center">
                <figure class="avatar ms-auto me-auto mb-0 mt--6 position-relative w75 z-index-1">
                  <img
                    src="images/user.png"
                    alt="image"
                    class="float-right p-1 bg-white rounded-circle w-100"
                  />
                </figure>
                <div class="clearfix"></div>
                <h4 class="fw-700 font-xsss mt-2 mb-1">{user.name}</h4>
                <p class="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                  {shortenAddress(user.owner)}
                </p>
                <span class="live-tag mt-2 mb-0 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">
                  LIVE PROFILE
                </span>
                <div class="clearfix mb-2"></div>
              </div>
            </div>
          </div>
        ))}
        {/* <div class="item">
          <div class="card w200 d-block border-0 shadow-xss rounded-xxl overflow-hidden mb-3 me-2 mt-3">
            <div
              class="card-body position-relative h100 bg-image-cover bg-image-center"
              style={{ backgroundImage: "url(images/u-bg.jpg)" }}
            ></div>
            <div class="card-body d-block w-100 ps-4 pe-4 pb-4 text-center">
              <figure class="avatar ms-auto me-auto mb-0 mt--6 position-relative w75 z-index-1">
                <img
                  src="images/user-11.png"
                  alt="image"
                  class="float-right p-1 bg-white rounded-circle w-100"
                />
              </figure>
              <div class="clearfix"></div>
              <h4 class="fw-700 font-xsss mt-2 mb-1">Aliqa Macale</h4>
              <p class="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                support@gmail.com
              </p>
              <span class="live-tag mt-2 mb-0 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">
                LIVE
              </span>
              <div class="clearfix mb-2"></div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MainFriendSlider;
