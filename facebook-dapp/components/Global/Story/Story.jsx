import React from "react";

import StoryAds from "../../../Ads/storyAds.json";

const Story = () => {
  return (
    <div class="main-content right-chat-active">
      <div class="middle-sidebar-bottom">
        <div class="middle-sidebar-left pe-0">
          <div class="row">
            <div class="col-xl-12">
              <div class="row ps-2 pe-1">
                {StoryAds.map((story, index) => (
                  <div class="col-md-3 col-xss-6 pe-2 ps-2">
                    <div class="card h300 d-block border-0 shadow-xss rounded-3 bg-gradiant-bottom overflow-hidden mb-3">
                      <video
                        autoPlay
                        loop
                        controls
                        src={story.video}
                        class="float-right w-100"
                      ></video>
                      <div class="card-body d-block w-100 position-absolute bottom-0 text-center">
                        <figure class="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                          <img
                            src={story.brand}
                            alt="image"
                            class="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                          />
                        </figure>
                        <div class="clearfix"></div>
                        <h4 class="fw-600 position-relative z-index-1 ls-3 font-xssss text-white mt-2 mb-1">
                          {story.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
