import React from "react";

const RightChatGroups = ({
  intrestedUsers,
  setOpenChatModel,
  setSendUser,
  setSendAddress,
}) => {
  const displyFollowing = [];

  intrestedUsers.map((item) => {
    if (item.owner == "0x0000000000000000000000000000000000000000") {
      console.log("");
    } else {
      displyFollowing.push(item);
    }
  });
  return (
    <div class="section full pe-3 ps-4 pt-4 pb-4 position-relative feed-body">
      {displyFollowing?.length != 0 && (
        <h4 class="font-xsssss text-grey-500 text-uppercase fw-700 ls-3">
          Following
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
            <span class="btn-round-sm bg-gold-gradiant me-3 ls-3 text-white font-xssss fw-700">
              {user.name.slice(0, 2)}
            </span>
            <h3 class="fw-700 mb-0 mt-0">
              <a
                class="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                href="#"
              >
                {user.name}
              </a>
            </h3>
            <span class="bg-warning ms-auto btn-round-xss"></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightChatGroups;
