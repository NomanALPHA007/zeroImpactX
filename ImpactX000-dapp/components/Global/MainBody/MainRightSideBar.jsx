import React from "react";
import { AiOutlineArrowRight, AiOutlinePlus } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";

//INTERNAL IMPORT
import { shortenAddress } from "../../../utils/utils";
import Discord from "../../../Ads/discordAds.json";
import Product from "../../../Ads/product.json";
import {
  DiscordAds,
  EventsAds,
  ProductAds,
  TopProfile,
  Dappusers,
} from "../MainBody/index";

const MainRightSideBar = ({ AppUsers, FOLLOW_USER }) => {
  return (
    <div class="col-xl-4 col-xxl-3 col-lg-4 ps-lg-0">
      <Dappusers
        AppUsers={AppUsers}
        FOLLOW_USER={FOLLOW_USER}
        shortenAddress={shortenAddress}
      />

      <TopProfile
        AppUsers={AppUsers}
        shortenAddress={shortenAddress}
        icon={<AiOutlinePlus />}
        FOLLOW_USER={FOLLOW_USER}
      />

      <DiscordAds />

      <ProductAds icon={<BsBoxArrowUpRight />} />

      <EventsAds />
    </div>
  );
};

export default MainRightSideBar;
