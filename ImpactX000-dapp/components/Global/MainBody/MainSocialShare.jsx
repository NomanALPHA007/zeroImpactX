import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagramSquare,
  FaPinterestP,
} from "react-icons/fa";
import { BiCopy } from "react-icons/bi";

const MainSocialShare = ({ postID }) => {
  return (
    <div
      class="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
      aria-labelledby="dropdownMenu21"
    >
      <h4 class="fw-700 font-xss text-grey-900 d-flex align-items-center">
        Share
        <i class=" ms-auto font-xssss btn-round-xs bg-greylight text-grey-900 me-2">
          <AiOutlineClose />
        </i>
      </h4>
      <div class="card-body p-0 d-flex">
        <ul class="d-flex align-items-center justify-content-between mt-2">
          <li class="me-1">
            <a
              href="https://www.facebook.com/"
              class="btn-round-lg bg-facebook"
              target="_blank"
            >
              <i class="font-xs  text-white">
                <FaFacebookF />
              </i>
            </a>
          </li>
          <li class="me-1">
            <a
              href="https://twitter.com/home"
              target="_blank"
              class="btn-round-lg bg-twiiter"
            >
              <i class="font-xs  text-white">
                <FaTwitter />
              </i>
            </a>
          </li>
          <li class="me-1">
            <a
              href="https://linkedin.com/"
              target="_blank"
              class="btn-round-lg bg-linkedin"
            >
              <i class="font-xs  text-white">
                <FaLinkedinIn />
              </i>
            </a>
          </li>
          <li class="me-1">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              class="btn-round-lg bg-instagram"
            >
              <i class="font-xs  text-white">
                <FaInstagramSquare />
              </i>
            </a>
          </li>
          <li>
            <a
              href="https://in.pinterest.com/"
              target="_blank"
              class="btn-round-lg bg-pinterest"
            >
              <i class="font-xs  text-white">
                <FaPinterestP />
              </i>
            </a>
          </li>
        </ul>
      </div>

      <h4 class="fw-700 font-xssss mt-4 text-grey-500 d-flex align-items-center mb-3">
        Copy Link
      </h4>
      <i
        onClick={() =>
          navigator.clipboard.writeText(
            `http://localhost:3000/?postDetails=${postID}&type=details`
          )
        }
        class=" position-absolute right-35 mt-3 font-xs text-grey-500"
      >
        <BiCopy />
      </i>
      <input
        type="text"
        // value={`http://localhost:3000/singlepost/${postID}`}
        value={`http://localhost:3000/?postDetails=${postID}&type=details`}
        class="bg-grey text-grey-500 font-xssss border-0 lh-32 p-2 font-xssss fw-600 rounded-3 w-100 theme-dark-bg"
      />
    </div>
  );
};

export default MainSocialShare;
