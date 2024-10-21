import React from "react";
import { BiLike } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

//INTERNAL IMPRT
import { MainShareLink, MainSocialShare } from "./index";

const MainMultiPost = () => {
  return (
    <div class="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
      {/* <div class="card-body p-0 d-flex">
        <figure class="avatar me-3">
          <img
            src="images/user-7.png"
            alt="image"
            class="shadow-sm rounded-circle w45"
          />
        </figure>
        <h4 class="fw-700 text-grey-900 font-xssss mt-1">
          Surfiya Zakir
          <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
            3 hour ago
          </span>
        </h4>
        <a
          href="#"
          class="ms-auto"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class=" text-grey-900 btn-round-md bg-greylight font-xss">
            <BsThreeDots />
          </i>
        </a>
        <MainShareLink />
      </div> */}
      <div class="card-body p-0 me-lg-5">
        <p class="fw-500 text-grey-500 lh-26 font-xssss w-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
          dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
          mollis pharetra. Proin blandit ac massa sed rhoncus
          <a href="#" class="fw-600 text-primary ms-2">
            See more
          </a>
        </p>
      </div>
      <div class="card-body d-block p-0">
        <div class="row ps-2 pe-2">
          <div class="col-xs-4 col-sm-4 p-1">
            <a href="images/t-10.jpg" data-lightbox="roadtrip">
              <img src="images/t-10.jpg" class="rounded-3 w-100" alt="image" />
            </a>
          </div>
          <div class="col-xs-4 col-sm-4 p-1">
            <a href="images/t-11.jpg" data-lightbox="roadtrip">
              <img src="images/t-11.jpg" class="rounded-3 w-100" alt="image" />
            </a>
          </div>
          <div class="col-xs-4 col-sm-4 p-1">
            <a
              href="images/t-12.jpg"
              data-lightbox="roadtrip"
              class="position-relative d-block"
            >
              <img src="images/t-12.jpg" class="rounded-3 w-100" alt="image" />
              <span class="img-count font-sm text-white ls-3 fw-600">
                <b>+2</b>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="card-body d-flex p-0 mt-3">
        <a
          href="#"
          class="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
        >
          <i class=" text-white bg-primary-gradiant me-1 btn-round-xs font-xss">
            <BiLike />
          </i>
          <i class=" text-white bg-red-gradiant me-2 btn-round-xs font-xss">
            <AiOutlineHeart />
          </i>
          2.8K Like
        </a>
        <div class="emoji-wrap">
          <ul class="emojis list-inline mb-0">
            <li class="emoji list-inline-item">
              <i class="em em---1"></i>
            </li>
            <li class="emoji list-inline-item">
              <i class="em em-angry"></i>
            </li>
            <li class="emoji list-inline-item">
              <i class="em em-anguished"></i>
            </li>
            <li class="emoji list-inline-item">
              <i class="em em-astonished"></i>
            </li>
            <li class="emoji list-inline-item">
              <i class="em em-blush"></i>
            </li>
            <li class="emoji list-inline-item">
              <i class="em em-clap"></i>
            </li>
            <li class="emoji list-inline-item">
              <i class="em em-cry"></i>
            </li>
            <li class="emoji list-inline-item">
              <i class="em em-full_moon_with_face"></i>
            </li>
          </ul>
        </div>
        <a
          href="#"
          class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
        >
          <i class=" text-dark text-grey-900 btn-round-sm font-lg">
            <FaRegComment />
          </i>
          <span class="d-none-xss">22 Comment</span>
        </a>
        <a
          href="#"
          id="dropdownMenu21"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
        >
          <i class=" text-grey-900 text-dark btn-round-sm font-lg">
            <AiOutlineShareAlt />
          </i>
          <span class="d-none-xs">Share</span>
        </a>
        <MainSocialShare />
      </div>
    </div>
  );
};

export default MainMultiPost;
