import React, { useState } from "react";

import {
  MainLoader,
  MainRightSideBar,
  MainStory,
  MainCreatePost,
  MainMultiPost,
  MainTextPost,
  MainFriendSlider,
  MainVideoPost,
  MainFourPost,
  MainFiendSliderTwo,
  MainImagePost,
  MainPostLoader,
  CreatePost,
} from "./index";

const MainBody = ({
  menuPostion,
  setOpenCreatePost,
  CREATE_ACCOUNT,
  AllAppPost,
  AppUsers,
  LIKE_POST,
  FOLLOW_USER,
  DELETE_POST,
  userAddress,
  setOpenComment,
  setCommentPostID,
  setAllPostComments,
}) => {
  const displyPosts = [];

  AllAppPost.map((item) => {
    if (item.author == "0x0000000000000000000000000000000000000000") {
      return;
    } else {
      displyPosts.push(item);
    }
  });
  return (
    <>
      <div
        class={`main-content right-chat-active ${
          menuPostion ? "menu-active" : ""
        }`}
      >
        <div class="middle-sidebar-bottom">
          <div class="middle-sidebar-left">
            {/* <!-- loader wrapper --> */}
            <MainLoader />
            {/* /<!-- loader wrapper --> */}
            <div class="row feed-body">
              <div class="col-xl-8 col-xxl-9 col-lg-8">
                <MainStory CREATE_ACCOUNT={CREATE_ACCOUNT} />
                <MainCreatePost setOpenCreatePost={setOpenCreatePost} />
                {/* //POST SECTION  1*/}
                {displyPosts
                  .reverse()
                  .map((post, index) => (
                    <>
                      {post.postType == "Text" ? (
                        <MainTextPost
                          setAllPostComments={setAllPostComments}
                          setCommentPostID={setCommentPostID}
                          setOpenComment={setOpenComment}
                          DELETE_POST={DELETE_POST}
                          userAddress={userAddress}
                          LIKE_POST={LIKE_POST}
                          post={post}
                        />
                      ) : post.postType == "Video" ? (
                        <MainVideoPost
                          setAllPostComments={setAllPostComments}
                          setCommentPostID={setCommentPostID}
                          setOpenComment={setOpenComment}
                          DELETE_POST={DELETE_POST}
                          userAddress={userAddress}
                          LIKE_POST={LIKE_POST}
                          post={post}
                        />
                      ) : (
                        <MainImagePost
                          setAllPostComments={setAllPostComments}
                          setCommentPostID={setCommentPostID}
                          setOpenComment={setOpenComment}
                          DELETE_POST={DELETE_POST}
                          userAddress={userAddress}
                          LIKE_POST={LIKE_POST}
                          post={post}
                        />
                      )}
                    </>
                  ))
                  .slice(0, 1)}
                <MainFriendSlider AppUsers={AppUsers} />
                {/* //POST SECTION  2*/}
                {displyPosts
                  .map((post, index) => (
                    <>
                      {post.postType == "Text" ? (
                        <MainTextPost
                          setAllPostComments={setAllPostComments}
                          setCommentPostID={setCommentPostID}
                          setOpenComment={setOpenComment}
                          DELETE_POST={DELETE_POST}
                          userAddress={userAddress}
                          LIKE_POST={LIKE_POST}
                          post={post}
                        />
                      ) : post.postType == "Video" ? (
                        <MainVideoPost
                          setAllPostComments={setAllPostComments}
                          setCommentPostID={setCommentPostID}
                          setOpenComment={setOpenComment}
                          DELETE_POST={DELETE_POST}
                          userAddress={userAddress}
                          LIKE_POST={LIKE_POST}
                          post={post}
                        />
                      ) : (
                        <MainImagePost
                          setAllPostComments={setAllPostComments}
                          setCommentPostID={setCommentPostID}
                          setOpenComment={setOpenComment}
                          DELETE_POST={DELETE_POST}
                          userAddress={userAddress}
                          LIKE_POST={LIKE_POST}
                          post={post}
                        />
                      )}
                    </>
                  ))
                  .slice(1, 5)}
                <MainFiendSliderTwo
                  FOLLOW_USER={FOLLOW_USER}
                  AppUsers={AppUsers}
                />
                {displyPosts
                  .map((post, index) => (
                    <>
                      {post.postType == "Text" ? (
                        <MainTextPost
                          setAllPostComments={setAllPostComments}
                          setCommentPostID={setCommentPostID}
                          setOpenComment={setOpenComment}
                          DELETE_POST={DELETE_POST}
                          userAddress={userAddress}
                          LIKE_POST={LIKE_POST}
                          post={post}
                        />
                      ) : post.postType == "Video" ? (
                        <MainVideoPost
                          setAllPostComments={setAllPostComments}
                          setCommentPostID={setCommentPostID}
                          setOpenComment={setOpenComment}
                          DELETE_POST={DELETE_POST}
                          userAddress={userAddress}
                          LIKE_POST={LIKE_POST}
                          post={post}
                        />
                      ) : (
                        <MainImagePost
                          setAllPostComments={setAllPostComments}
                          setCommentPostID={setCommentPostID}
                          setOpenComment={setOpenComment}
                          DELETE_POST={DELETE_POST}
                          userAddress={userAddress}
                          LIKE_POST={LIKE_POST}
                          post={post}
                        />
                      )}
                    </>
                  ))
                  .slice(5)}

                <MainPostLoader />
              </div>

              <MainRightSideBar AppUsers={AppUsers} FOLLOW_USER={FOLLOW_USER} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBody;
