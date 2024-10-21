import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const GlobalAppHeader = ({}) => {
  return (
    <div class="app-header-search">
      <form class="search-form">
        <div class="form-group searchbox mb-0 border-0 p-1">
          <input
            type="text"
            class="form-control border-0"
            placeholder="Search..."
          />
          <i class="input-icon">
            <ion-icon
              name="search-outline"
              role="img"
              class="md hydrated"
              aria-label="search outline"
            ></ion-icon>
          </i>
          <a href="#" class="ms-1 mt-1 d-inline-block close searchbox-close">
            <i class=" font-xs">
              <AiOutlineClose />
            </i>
          </a>
        </div>
      </form>
    </div>
  );
};

export default GlobalAppHeader;
