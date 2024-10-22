import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

import StoryAds from "../../../Ads/storyAds.json";

const MainStory = ({ CREATE_ACCOUNT }) => {
  return (
    <div class="card w-100 shadow-none bg-transparent bg-transparent-card border-0 p-0 mb-0">
      <div class="new_flex owl-theme overflow-hidden nav-none">
        {StoryAds.map((ads, index) => (
          <div class="item">
            <div class="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-3">
              <video
                autoPlay
                loop
                src={ads.video}
                class="float-right w-100"
              ></video>
              <div class="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                <a href="#">
                  <figure class="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                    <img
                      src={ads.brand}
                      alt="image"
                      class="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                    />
                  </figure>
                  <div class="clearfix"></div>
                  <h4 class="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                    {ads.name}
                  </h4>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainStory;
