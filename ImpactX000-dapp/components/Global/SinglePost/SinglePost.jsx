import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import { MainImagePost, MainVideoPost, MainTextPost } from "../MainBody/index";

const SinglePost = ({
  GET_SINGLE_POST,
  DELETE_POST,
  userAddress,
  post,
  LIKE_POST,
  setOpenComment,
  setCommentPostID,
  setAllPostComments,
}) => {
  const [postDetails, setPostDetails] = useState();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    console.log(router.query.postDetails);
    GET_SINGLE_POST(router.query.postDetails).then((items) => {
      setPostDetails(items);
      console.log(items);
    });
  }, [router.isReady]);
  return (
    <div class="main-content bg-white right-chat-active">
      <div class="middle-sidebar-bottom">
        <div class="middle-sidebar-left">
          <div class="row">
            <div class="col-xl-12 col-xxl-12 col-lg-12">
              <div class="row">
                {postDetails?.postType == "Image" && (
                  <MainImagePost
                    DELETE_POST={DELETE_POST}
                    userAddress={userAddress}
                    post={post}
                    LIKE_POST={LIKE_POST}
                    post={postDetails}
                    setAllPostComments={setAllPostComments}
                    setCommentPostID={setCommentPostID}
                    setOpenComment={setOpenComment}
                  />
                )}
                {postDetails?.postType == "Video" && (
                  <MainVideoPost
                    DELETE_POST={DELETE_POST}
                    userAddress={userAddress}
                    post={post}
                    LIKE_POST={LIKE_POST}
                    post={postDetails}
                    setAllPostComments={setAllPostComments}
                    setCommentPostID={setCommentPostID}
                    setOpenComment={setOpenComment}
                  />
                )}
                {postDetails?.postType == "Text" && (
                  <MainTextPost
                    DELETE_POST={DELETE_POST}
                    userAddress={userAddress}
                    post={post}
                    LIKE_POST={LIKE_POST}
                    post={postDetails}
                    setAllPostComments={setAllPostComments}
                    setCommentPostID={setCommentPostID}
                    setOpenComment={setOpenComment}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
