import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

//INTERNAL IMPORT
import { shortenAddress } from "../../../utils/utils";

const UserBanner = ({ userAccount }) => {
  const recipient = "theblockchaincoders@gmail.com";
  const subject = "Heartfelt Thanks for Your Outstanding Work on Social Media";
  const body =
    "Dear [Recipient's Name],\nI hope this message finds you well. I wanted to take a moment to extend my sincere appreciation for your exceptional efforts and dedication throughout the entire duration of Social media web3.\nYour hard work, creativity, and attention to detail have not gone unnoticed. The project's success is a testament to your unwavering commitment and the high standards you consistently uphold. Your ability to collaborate and contribute valuable insights has truly set a benchmark for excellence.\n I am genuinely grateful for the countless hours you invested, the challenges you navigated with grace, and the positive energy you brought to the team. Your contributions have not only met but exceeded our expectations, and it is clear that your passion for your work shines through.\n This projects success is, in no small part, a reflection of your dedication and expertise. Your positive attitude and willingness to go above and beyond have made a significant impact, and I am confident that your efforts will continued to inspire those around you.\nOnce again, thank you for your outstanding work on Social media web3. Your professionalism, skill, and enthusiasm have been instrumental in achieving our goals, and we look forward to future collaborations with the same level of enthusiasm and success.\nWishing you continued success in all your endeavors.\n Warm regards";

  const handleClick = () => {
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  return (
    <div class="col-xl-12">
      <div class="card w-100 shadow-xss rounded-xxl border-0 mb-3 mt-3 overflow-hidden">
        <div
          class="card-body position-relative h240 bg-image-cover bg-image-center"
          style={{ backgroundImage: "url(images/bb-9.jpg)" }}
        ></div>
        <div class="card-body d-block pt-4 text-center position-relative">
          <figure class="avatar mt--6 position-relative w75 z-index-1 w100 z-index-1 ms-auto me-auto">
            <img
              src="images/you.png"
              alt="image"
              class="p-1 bg-white rounded-xl w-100"
            />
          </figure>

          <h4 class="font-xs ls-1 fw-700 text-grey-900">
            {shortenAddress(userAccount.owner)}
            <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
              {userAccount.name}
            </span>
          </h4>
          <div class="d-flex align-items-center pt-0 position-absolute left-15 top-10 mt-4 ms-2">
            <h4 class="font-xsssss text-center d-none d-lg-block text-grey-500 fw-600 ms-2 me-2">
              <b class="text-grey-900 mb-1 font-sm fw-700 d-inline-block ls-3 text-dark">
                {userAccount.postCount}
              </b>
              Posts
            </h4>
            <h4 class="font-xsssss text-center d-none d-lg-block text-grey-500 fw-600 ms-2 me-2">
              <b class="text-grey-900 mb-1 font-sm fw-700 d-inline-block ls-3 text-dark">
                {userAccount.followerCount}
              </b>
              Followers
            </h4>
            <h4 class="font-xsssss text-center d-none d-lg-block text-grey-500 fw-600 ms-2 me-2">
              <b class="text-grey-900 mb-1 font-sm fw-700 d-inline-block ls-3 text-dark">
                {userAccount.followingCount}
              </b>
              Follow
            </h4>
          </div>
          <div class="d-flex align-items-center justify-content-center position-absolute right-15 top-10 mt-2 me-2">
            <a
              onClick={() => handleClick()}
              class="d-none d-lg-block bg-greylight btn-round-lg ms-2 rounded-3 text-grey-700"
            >
              <i class=" font-md">
                <AiOutlineMail />
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBanner;
