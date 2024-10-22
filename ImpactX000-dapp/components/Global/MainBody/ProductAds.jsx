import React from "react";
import Product from "../../../Ads/product.json";

const ProductAds = ({ icon }) => {
  return (
    <div class="card w-100 shadow-xss rounded-xxl border-0 mb-3">
      <div class="card-body d-flex align-items-center p-4">
        <h4 class="fw-700 mb-0 font-xssss text-grey-900">Top products</h4>
        <a
          href="default-group.html"
          class="fw-600 ms-auto font-xssss text-primary"
        >
          Visit
        </a>
      </div>
      {Product.map((product, index) => (
        <>
          <div
            class={`card-body d-flex pt-4 ps-4 pe-4 pb-0 overflow-hidden ${
              index == 0 ? "border-top-xs" : ""
            } bor-0`}
          >
            <img
              src={product.brand}
              alt="img"
              class="img-fluid rounded-xxl mb-2"
            />
          </div>
          <div class="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4">
            <a
              href={product.Link}
              class="p-2 lh-28 w-100 bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xl"
            >
              <i class=" font-xss me-2">{icon}</i> Buy Now
            </a>
          </div>
        </>
      ))}
    </div>
  );
};

export default ProductAds;
