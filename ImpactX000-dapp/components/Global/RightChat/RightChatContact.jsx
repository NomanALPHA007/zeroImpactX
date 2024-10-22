import React from "react";

const RightChatContact = ({
  userFollowing,
  setOpenChatModel,
  setSendUser,
  setSendAddress,
}) => {
  const displyFollowing = [];

  userFollowing.map((item) => {
    if (item.owner == "0x0000000000000000000000000000000000000000") {
      console.log("");
    } else {
      displyFollowing.push(item);
    }
  });
  return (
    <div class="section full pe-3 ps-4 pt-4 position-relative feed-body">
      {displyFollowing?.length != 0 && (
        <h4 class="font-xsssss text-grey-500 text-uppercase fw-700 ls-3">
          Followers
        </h4>
      )}

      <ul class="list-group list-group-flush">
        {displyFollowing?.map((user, index) => (
          <li
            key={index + 1}
            onClick={() => (
              setOpenChatModel(true),
              setSendAddress(user.owner),
              setSendUser(user.name)
            )}
            class="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center"
          >
            <figure class="avatar float-left mb-0 me-2">
              <img
                src="images/user.png"
                alt="image"
                class="w35 rounded-circle"
              />
            </figure>
            <h3 class="fw-700 mb-0 mt-0">
              <a
                class="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                href="#"
              >
                {user.name}
              </a>
            </h3>
            <span class="bg-success ms-auto btn-round-xss"></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightChatContact;
