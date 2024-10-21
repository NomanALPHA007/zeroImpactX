import React from "react";

import NFTs from "../../../Ads/nftAds.json";

const YourProduct = () => {
  return (
    <div class="main-content bg-white right-chat-active">
      <div class="middle-sidebar-bottom">
        <div class="middle-sidebar-left">
          <div class="row">
            <div class="col-xl-12 col-xxl-12 col-lg-12">
              <div class="row">
                <div class="col-lg-12">
                  <div class="card p-md-5 p-4 bg-primary-gradiant rounded-3 shadow-xss bg-pattern border-0 overflow-hidden">
                    <div class="bg-pattern-div"></div>
                    <h2 class="display2-size display2-md-size fw-700 text-white mb-0 mt-0">
                      Popular NFT Collaction
                      <span class="fw-700 ls-3 text-grey-200 font-xsssss mt-2 d-block">
                        GET LATEST NFT UPDATE
                      </span>
                    </h2>
                  </div>
                </div>

                {NFTs.map((nft, index) => (
                  <div key={nft.productId} class="col-lg-4 col-md-6">
                    <div class="card w-100 border-0 mt-4">
                      <div class="card-image w-100 p-0 text-center bg-greylight rounded-3 mb-2">
                        <a href={nft.Link} target="_blank">
                          <img
                            src={nft.brand}
                            alt="product-image"
                            class="w-100 mt-0 mb-0 "
                          />
                        </a>
                      </div>
                      <div class="card-body w-100 p-0 text-center">
                        <h2 class="mt-2 mb-1">
                          <a
                            href={nft.Link}
                            target="_blank"
                            class="text-black fw-700 font-xsss lh-26"
                          >
                            {nft.name}
                          </a>
                        </h2>
                        <h6 class="font-xsss fw-600 text-grey-500 ls-2">
                          {nft.price}
                        </h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourProduct;
