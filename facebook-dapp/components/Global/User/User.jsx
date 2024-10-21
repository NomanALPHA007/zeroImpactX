import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiSolidFilterAlt } from "react-icons/bi";

//INTERN IMPORT
import { shortenAddress } from "../../../utils/utils";

const User = ({ memberGroups, JOIN_GROUP }) => {
  return (
    <div class="main-content right-chat-active">
      <div class="middle-sidebar-bottom">
        <div class="middle-sidebar-left pe-0">
          <div class="row">
            <div class="col-xl-12">
              <div class="card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3">
                <div class="card-body d-flex align-items-center p-0">
                  <h2 class="fw-700 mb-0 mt-0 font-md text-grey-900">Users</h2>
                  <div class="search-form-2 ms-auto">
                    <i class=" font-xss">
                      <BsSearch />
                    </i>
                    <input
                      type="text"
                      class="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0"
                      placeholder="Search here."
                    />
                  </div>
                  <a
                    href="#"
                    class="btn-round-md ms-2 bg-greylight theme-dark-bg rounded-3"
                  >
                    <i class=" font-xss text-grey-500">
                      <BiSolidFilterAlt />
                    </i>
                  </a>
                </div>
              </div>

              <div class="row ps-2 pe-1">
                {memberGroups.map((group, index) => (
                  <div class="col-md-6 col-sm-6 pe-2 ps-2">
                    <div class="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                      <div
                        class="card-body position-relative h100 bg-image-cover bg-image-center"
                        style={{ backgroundImage: `url(images/bb-16.png)` }}
                      ></div>
                      <div class="card-body d-block w-100 pl-10 pe-4 pb-4 pt-0 text-left position-relative">
                        <figure
                          class="avatar position-absolute w75 z-index-1"
                          style={{ top: "-40px", left: "15px" }}
                        >
                          <img
                            src={`ProductAds/logo-${index + 1}.jpg`}
                            alt="image"
                            class="float-right p-1 bg-white rounded-circle w-100"
                          />
                        </figure>
                        <div class="clearfix"></div>
                        <h4 class="fw-700 font-xsss mt-3 mb-1">{group.name}</h4>
                        <p class="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                          {group.description}
                        </p>
                        <span class="position-absolute right-15 top-0 d-flex align-items-center">
                          <a
                            onClick={() => JOIN_GROUP(group.groupID)}
                            class="text-center p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-current font-xsssss fw-700 ls-lg text-white"
                          >
                            JOIN
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                <div class="col-md-12 pe-2 ps-2">
                  <div class="card w-100 text-center shadow-xss rounded-xxl border-0 p-4 mb-3 mt-0">
                    <div
                      class="snippet mt-2 ms-auto me-auto"
                      data-title=".dot-typing"
                    >
                      <div class="stage">
                        <div class="dot-typing"></div>
                      </div>
                    </div>
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

export default User;
