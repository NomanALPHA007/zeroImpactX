import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import {
  Header,
  Footer,
  SideBar,
  RightChat,
  MainBody,
  GlobalChatModal,
  GlobalAppHeader,
  GlobalAppFooter,
  GlobalStory,
  Register,
  Members,
  Story,
  Shop,
  AccountComponent,
  UserProfile,
  User,
  AccountFriend,
  Message,
  YourFriends,
  YourProduct,
  YourMedia,
  YourVideo,
  YourText,
  SinglePost,
  EditPost,
  GlobalCommentModal,
  Loader,
} from "../components/index";
import { GroupChat } from "../components/Global/RightChat/index";
import { CreatePost } from "../components/Global/MainBody/index";
///INTERNAL IMPORT
import { SOCAIL_MEDIA_Context } from "../context/context";

const index = () => {
  //CONTEXT DATA
  const {
    INITAIL_CONTRACT,
    CREATE_ACCOUNT,
    CREATE_POST,
    LIKE_POST,
    UNLIKE_POST,
    ADD_COMMENT_POST,
    SEND_MESSAGE,
    EDIT_POST,
    FOLLOW_USER,
    UNFOLLOW_USER,
    READ_MESSAGE,
    CREATE_GROUP,
    JOIN_GROUP,
    SEND_GROUP_MESSAGE,
    GET_GROUP_MESSAGE,
    GET_SINGLE_POST,
    DELETE_POST,
    connected,
    setConnected,
    connectWallet,
    AllAppPost,
    AppUsers,
    AppUserPost,
    userAccount,
    userFollowers,
    userFollowing,
    memberGroups,
    loader,
    openCreatePost,
    setOpenCreatePost,
    userAddress,
    setUserAddress,
    activeComponent,
    setActiveComponent,
    openComment,
    setOpenComment,
    count,
  } = useContext(SOCAIL_MEDIA_Context);

  //ROUTER
  const router = useRouter();
  const [postType, setPostType] = useState();
  const [openSideChat, setOpenSideChat] = useState(false);
  const [openTheme, setOpenTheme] = useState(false);
  const [backgroundTheme, setBackgroundTheme] = useState(false); //menu-current-color
  const [menuPostion, setMenuPostion] = useState(false); //menu-active
  const [theme, setTheme] = useState(false); //theme-dark
  const [navbarActive, setNavbarActive] = useState(false); //nav-active

  //LOCAL STATE
  const [commentPostID, setCommentPostID] = useState();
  const [allPostComments, setAllPostComments] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;

    if (router.asPath == "/") {
      setActiveComponent("Newsfeed");
    } else setActiveComponent(router.asPath.slice(2));
    if (router.query.type) {
      setActiveComponent("");
      console.log(router.query.type);
      setPostType(router.query.type);
    }
  }, [router.isReady]);

  const [sendUser, setSendUser] = useState("");
  const [sendAddress, setSendAddress] = useState("");
  const [openChatModel, setOpenChatModel] = useState(false);
  const [openGroupChatModel, setOpenGroupChatModel] = useState(false);
  const [groupChatName, setGroupChatName] = useState();
  const [groupDescription, setGroupDescription] = useState();
  const [groupChatID, setGroupChatID] = useState();

  //NEW LOCAL STATE
  const [allPostFilter, setAllPostFilter] = useState(AllAppPost);
  const [allPostFilterCopy, setAllPostFilterCopy] = useState(AllAppPost);

  //FILTER ALL POST
  const onHandleSearch = (value) => {
    const filteredPost = AllAppPost.filter(({ postType }) =>
      postType.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredPost.length === 0) {
      setAllPostFilter(allPostFilterCopy);
    } else {
      setAllPostFilter(filteredPost);
    }
  };

  const onClearSearch = () => {
    if (AllAppPost.length && allPostFilterCopy.length) {
      setAllPostFilter(allPostCopy);
    }
  };

  console.log(allPostFilter);

  return (
    <>
      {connected == "CREATE_ACCOUNT" ? (
        <Register
          CREATE_ACCOUNT={CREATE_ACCOUNT}
          userAddress={userAddress}
          connected={connected}
          connectWallet={connectWallet}
        />
      ) : (
        <div class={`color-theme-blue mont-font ${theme ? "theme-dark" : ""} `}>
          <div class="main-wrapper">
            {/* TOP NAVIGATION */}
            <Header
              INITAIL_CONTRACT={INITAIL_CONTRACT}
              userAddress={userAddress}
              setUserAddress={setUserAddress}
              navbarActive={navbarActive}
              setNavbarActive={setNavbarActive}
              backgroundTheme={backgroundTheme}
              setBackgroundTheme={setBackgroundTheme}
              menuPostion={menuPostion}
              setMenuPostion={setMenuPostion}
              theme={theme}
              setTheme={setTheme}
              openTheme={openTheme}
              setOpenTheme={setOpenTheme}
              openSideChat={openSideChat}
              setOpenSideChat={setOpenSideChat}
              intrestedUsers={userFollowers}
              setActiveComponent={setActiveComponent}
              functionName={CREATE_GROUP}
              onHandleSearch={onHandleSearch}
              onClearSearch={onClearSearch}
            />
            {/* <!-- navigation left --> */}
            <SideBar
              navbarActive={navbarActive}
              menuPostion={menuPostion}
              backgroundTheme={backgroundTheme}
              setActiveComponent={setActiveComponent}
              message={userFollowers.length}
              pageType={router.query.type}
              userAddress={userAddress}
              userAccount={userAccount}
            />

            {activeComponent == "Newsfeed" ? (
              <MainBody
                menuPostion={menuPostion}
                userAddress={userAddress}
                CREATE_ACCOUNT={CREATE_ACCOUNT}
                DELETE_POST={DELETE_POST}
                setOpenCreatePost={setOpenCreatePost}
                AllAppPost={AllAppPost}
                AppUsers={AppUsers}
                LIKE_POST={LIKE_POST}
                FOLLOW_USER={FOLLOW_USER}
                setOpenComment={setOpenComment}
                setCommentPostID={setCommentPostID}
                setAllPostComments={setAllPostComments}
              />
            ) : activeComponent == "TopUser" ? (
              <Members AppUsers={AppUsers} FOLLOW_USER={FOLLOW_USER} />
            ) : activeComponent == "ProductAds" ? (
              <Story />
            ) : activeComponent == "Memberships" ? (
              <User memberGroups={memberGroups} JOIN_GROUP={JOIN_GROUP} />
            ) : activeComponent == "AuthorProfile" ? (
              <UserProfile
                setOpenCreatePost={setOpenCreatePost}
                userAccount={userAccount}
                AppUserPost={AppUserPost}
                AppUsers={AppUsers}
                LIKE_POST={LIKE_POST}
                FOLLOW_USER={FOLLOW_USER}
                LIKE_POST={LIKE_POST}
                setOpenComment={setOpenComment}
                setCommentPostID={setCommentPostID}
                setAllPostComments={setAllPostComments}
              />
            ) : activeComponent == "Message" ? (
              <Message
                intrestedUsers={userFollowers}
                setSendUser={setSendUser}
                setSendAddress={setSendAddress}
                setOpenChatModel={setOpenChatModel}
              />
            ) : activeComponent == "Following" ? (
              <YourFriends
                intrestedUsers={userFollowing}
                handleFunction={UNFOLLOW_USER}
                type={"Unfollow"}
              />
            ) : activeComponent == "Followers" ? (
              <YourFriends
                handleFunction={() => {}}
                intrestedUsers={userFollowers}
              />
            ) : activeComponent == "ERC20Tokens" ? (
              <Shop />
            ) : activeComponent == "NFTS" ? (
              <YourProduct />
            ) : activeComponent == "Media" ? (
              <YourMedia
                AllAppPost={AllAppPost}
                LIKE_POST={LIKE_POST}
                setOpenComment={setOpenComment}
                setCommentPostID={setCommentPostID}
                setAllPostComments={setAllPostComments}
              />
            ) : activeComponent == "Video" ? (
              <YourVideo
                DELETE_POST={DELETE_POST}
                AllAppPost={AllAppPost}
                LIKE_POST={LIKE_POST}
                setOpenComment={setOpenComment}
                setCommentPostID={setCommentPostID}
                setAllPostComments={setAllPostComments}
              />
            ) : activeComponent == "Setting" ? (
              <YourText userAddress={userAddress} />
            ) : postType == "details" ? (
              <SinglePost
                GET_SINGLE_POST={GET_SINGLE_POST}
                DELETE_POST={DELETE_POST}
                userAddress={userAddress}
                LIKE_POST={LIKE_POST}
                setOpenComment={setOpenComment}
                setCommentPostID={setCommentPostID}
                setAllPostComments={setAllPostComments}
              />
            ) : postType == "edit" ? (
              <EditPost EDIT_POST={EDIT_POST} query={router.query} />
            ) : (
              <MainBody
                menuPostion={menuPostion}
                userAddress={userAddress}
                CREATE_ACCOUNT={CREATE_ACCOUNT}
                DELETE_POST={DELETE_POST}
                setOpenCreatePost={setOpenCreatePost}
                AllAppPost={AllAppPost}
                AppUsers={AppUsers}
                LIKE_POST={LIKE_POST}
                FOLLOW_USER={FOLLOW_USER}
                setOpenComment={setOpenComment}
                setCommentPostID={setCommentPostID}
                setAllPostComments={setAllPostComments}
              />
            )}

            <RightChat
              openTheme={openTheme}
              openSideChat={openSideChat}
              memberGroups={memberGroups}
              setGroupChatName={setGroupChatName}
              setGroupChatID={setGroupChatID}
              setGroupDescription={setGroupDescription}
              setOpenGroupChatModel={setOpenGroupChatModel}
              setSendUser={setSendUser}
              setSendAddress={setSendAddress}
              setOpenChatModel={setOpenChatModel}
              userFollowing={userFollowers}
              intrestedUsers={userFollowing}
            />

            <GlobalAppFooter setActiveComponent={setActiveComponent} />
            <GlobalAppHeader
              setOpenSideChat={setOpenSideChat}
              setActiveComponent={setActiveComponent}
            />
          </div>

          {openChatModel ? (
            <GlobalChatModal
              userAddress={userAddress}
              READ_MESSAGE={READ_MESSAGE}
              sendUser={sendUser}
              sendAddress={sendAddress}
              openChatModel={openChatModel}
              setOpenChatModel={setOpenChatModel}
              sendAddress={sendAddress}
              SEND_MESSAGE={SEND_MESSAGE}
              loader={loader}
              count={count}
            />
          ) : (
            ""
          )}

          {openGroupChatModel ? (
            <GroupChat
              groupChatName={groupChatName}
              groupDescription={groupDescription}
              groupChatID={groupChatID}
              userAddress={userAddress}
              openGroupChatModel={openGroupChatModel}
              setOpenGroupChatModel={setOpenGroupChatModel}
              GET_GROUP_MESSAGE={GET_GROUP_MESSAGE}
              SEND_GROUP_MESSAGE={SEND_GROUP_MESSAGE}
              loader={loader}
              count={count}
            />
          ) : (
            ""
          )}

          {openCreatePost ? (
            <div className="createPost">
              <CreatePost
                setOpenCreatePost={setOpenCreatePost}
                CREATE_POST={CREATE_POST}
              />
            </div>
          ) : (
            ""
          )}

          {openComment ? (
            <div className="createPost">
              <GlobalCommentModal
                allPostComments={allPostComments}
                setOpenComment={setOpenComment}
                ADD_COMMENT_POST={ADD_COMMENT_POST}
                commentPostID={commentPostID}
              />
            </div>
          ) : (
            ""
          )}
          {loader ? (
            <div className="new_loader">
              <Loader />
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};

export default index;
