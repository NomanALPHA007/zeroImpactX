import React from "react";

const Dappusers = ({ FOLLOW_USER, AppUsers, shortenAddress }) => {
  return (
    <div class="card w-100 shadow-xss rounded-xxl border-0 mb-3">
      <div class="card-body d-flex align-items-center p-4">
        <h4 class="fw-700 mb-0 font-xssss text-grey-900">Dapp Users</h4>
        <a
          href="default-member.html"
          class="fw-600 ms-auto font-xssss text-primary"
        >
          See all
        </a>
      </div>
      {AppUsers.map((user, index) => (
        <>
          <div
            class={`card-body d-flex ps-4  pe-4 pb-0 ${
              index == 0 ? "border-top-xs bor-0 pt-4" : "pt-0"
            } `}
          >
            <figure class="avatar me-3">
              <img
                src={`images/user.png`}
                alt="image"
                class="shadow-sm rounded-circle w45"
              />
            </figure>
            <h4 class="fw-700 text-grey-900 font-xssss mt-1">
              {user.name}
              <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                {shortenAddress(user.owner)}
              </span>
            </h4>
          </div>
          <div class="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4">
            <a
              onClick={() => FOLLOW_USER(user.owner)}
              class="p-2 lh-20 w100 bg-primary-gradiant me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl"
            >
              Follow
            </a>
            <a
              href="#"
              class="p-2 lh-20 w100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl"
            >
              Verified
            </a>
          </div>
        </>
      )).slice(0, 3)}
    </div>
  );
};

export default Dappusers;
