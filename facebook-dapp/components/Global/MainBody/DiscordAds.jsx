import React from "react";
import Discord from "../../../Ads/discordAds.json";

const DiscordAds = () => {
  return (
    <div class="card w-100 shadow-xss rounded-xxl border-0 mb-3 mt-3">
      <div class="card-body d-flex align-items-center p-4">
        <h4 class="fw-700 mb-0 font-xssss text-grey-900">Discord Ads</h4>
        <a
          href="default-group.html"
          class="fw-600 ms-auto font-xssss text-primary"
        >
          Visit
        </a>
      </div>

      {Discord.map((discord, index) => (
        <>
          <div class="card-body d-flex pt-4 ps-4 pe-4 pb-0 overflow-hidden border-top-xs bor-0">
            <img
              src={discord.brand}
              alt="img"
              class="img-fluid rounded-xxl mb-2"
            />
          </div>
          <div class="card-body dd-block pt-0 ps-4 pe-4 pb-4">
            <ul class="memberlist mt-1 mb-2 ms-0 d-block">
              {[1, 2, 3, 4, 5].map((user, index) => (
                <li class="w20">
                  <a href="#">
                    <img
                      src={`images/user-${user}.png`}
                      alt="user"
                      class="w35 d-inline-block"
                      style={{ opacity: 1 }}
                    />
                  </a>
                </li>
              ))}

              <li class="last-member">
                <a
                  href="#"
                  class="bg-greylight fw-600 text-grey-500 font-xssss w35 ls-3 text-center"
                  style={{ height: "35px", lineHeight: "35px" }}
                >
                  +2
                </a>
              </li>
              <li class="ps-3 w-auto ms-1">
                <a href="#" class="fw-600 text-grey-500 font-xssss">
                  Members joined
                </a>
              </li>
            </ul>
          </div>
        </>
      ))}
    </div>
  );
};

export default DiscordAds;
