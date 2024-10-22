import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { BiSolidFilterAlt } from "react-icons/bi";

//INTERNAL IMPORT
import { shortenAddress } from "../../../utils/utils";

const Members = ({ AppUsers, FOLLOW_USER }) => {
  //NEW LOCAL STATE
  const [allUser, setAllUser] = useState(AppUsers);
  const [allUserCopy, setAllUserCopy] = useState(AppUsers);

  console.log(AppUsers);

  //FILTER
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchItem), 1000);
    return () => clearTimeout(timer);
  }, [searchItem]);

  useEffect(() => {
    if (search) {
      onHandleSearch(search);
    } else {
      onClearSearch();
    }
  }, [search]);

  //FILTER ALL POST
  const onHandleSearch = (value) => {
    const filteredUsers = AppUsers.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredUsers.length === 0) {
      setAllUser(allUserCopy);
    } else {
      setAllUser(filteredUsers);
    }
  };

  const onClearSearch = () => {
    if (AppUsers.length && allUserCopy.length) {
      setAllUser(allUserCopy);
    }
  };
  return (
    <div class="main-content right-chat-active">
      <div class="middle-sidebar-bottom">
        <div class="middle-sidebar-left pe-0">
          <div class="row">
            <div class="col-xl-12">
              <div class="card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3">
                <div class="card-body d-flex align-items-center p-0">
                  <h2 class="fw-700 mb-0 mt-0 font-md text-grey-900">
                    Top Users
                  </h2>
                  <div class="search-form-2 ms-auto">
                    <i class=" font-xss">
                      <BsSearch />
                    </i>
                    <input
                      type="text"
                      class="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0"
                      placeholder="Search here."
                      onChange={(e) => setSearchItem(e.target.value)}
                      value={searchItem}
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
                {allUser.reverse().map((user, index) => (
                  <div key={index + 1} class="col-md-4 col-sm-6 pe-2 ps-2">
                    <div class="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                      <div class="card-body d-block w-100 p-4 text-center">
                        <figure class="avatar ms-auto me-auto mb-0 position-relative w90 z-index-1">
                          <img
                            src="images/user.png"
                            alt="image"
                            class="float-right p-1 bg-white rounded-circle w-100"
                          />
                        </figure>
                        <div class="clearfix"></div>
                        <h4 class="fw-700 font-xss mt-3 mb-0">{user.name}</h4>
                        <p class="fw-500 font-xssss text-grey-500 mt-0 mb-3">
                          {shortenAddress(user.owner)}
                        </p>

                        <ul class="d-flex align-items-center justify-content-center mt-1">
                          <li class="m-1">
                            <img src="images/top-student.svg" alt="icon" />
                          </li>
                          <li class="m-1">
                            <img src="images/onfire.svg" alt="icon" />
                          </li>
                          <li class="m-1">
                            <img src="images/challenge-medal.svg" alt="icon" />
                          </li>
                          <li class="m-1">
                            <img src="images/fast-graduate.svg" alt="icon" />
                          </li>
                        </ul>
                        <a
                          onClick={() => FOLLOW_USER(user.owner)}
                          class="mt-4 p-0 btn p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-current font-xsssss fw-700 ls-lg text-white"
                        >
                          FOLLOW
                        </a>
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

export default Members;
