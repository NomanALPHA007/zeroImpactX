import React from "react";

const RightChatPages = ({
  memberGroups,
  setGroupChatName,
  setGroupDescription,
  setGroupChatID,
  setOpenGroupChatModel,
}) => {
  return (
    <div class="section full pe-3 ps-4 pt-0 pb-4 position-relative feed-body">
      {memberGroups?.length != 0 && (
        <h4 class="font-xsssss text-grey-500 text-uppercase fw-700 ls-3">
          Members Groups
        </h4>
      )}

      <ul class="list-group list-group-flush">
        {memberGroups?.map((group, index) => (
          <li
            onClick={() => (
              setOpenGroupChatModel(true),
              setGroupChatName(group.name),
              setGroupDescription(group.description),
              setGroupChatID(group.groupID)
            )}
            class="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center"
          >
            <span class="btn-round-sm bg-primary-gradiant me-3 ls-3 text-white font-xssss fw-700">
              {group.name.slice(0, 2)}
            </span>
            <h3 class="fw-700 mb-0 mt-0">
              <a
                class="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                href="#"
              >
                {group.name}
              </a>
            </h3>
            <span class="bg-success ms-auto btn-round-xss"></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightChatPages;
