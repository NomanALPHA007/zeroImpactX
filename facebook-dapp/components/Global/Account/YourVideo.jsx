import React from "react";
import { BiLike } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

//INTERNAL IMPORT
import { MainVideoPost } from "../MainBody";

const YourVideo = ({
  AllAppPost,
  LIKE_POST,
  DELETE_POST,
  setOpenComment,
  setCommentPostID,
  setAllPostComments,
}) => {
  return (
    <div class="main-content right-chat-active">
      <div class="middle-sidebar-bottom">
        <div class="middle-sidebar-left">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              {AllAppPost.map((post, index) => (
                <>
                  {post.postType == "Video" && (
                    <MainVideoPost
                      DELETE_POST={DELETE_POST}
                      LIKE_POST={LIKE_POST}
                      post={post}
                      setOpenComment={setOpenComment}
                      setCommentPostID={setCommentPostID}
                      setAllPostComments={setAllPostComments}
                    />
                  )}
                </>
              ))}

              <div class="card w-100 text-center shadow-xss rounded-xxl border-0 p-4 mb-3">
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
  );
};

export default YourVideo;
