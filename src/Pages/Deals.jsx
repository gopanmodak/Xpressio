import React from "react";
import { Link } from "react-router-dom";

const Deals = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold font-mono border-b-2 border-zinc-300 p-3">
        Deals
      </h1>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-lg">
        <Link>
          <img
            src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/67d6a62a63084aa5c228d7d6_Deal%20Banner%20PnP_D_500.png"
            alt=""
            className="rounded-lg"
          />
        </Link>
        <Link>
          <img
            src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/67486f8e7e56121272ee57c4_BEST%20ONLINE%20DEALS%20card%20D_500.png"
            alt=""
            className="rounded-lg"
          />
        </Link>
        <Link>
          <img
            src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/68288641902cefa3987ac242_Limited_offer_Card_D_500.jpeg"
            alt=""
            className="rounded-lg"
          />
        </Link>
        <Link>
          {" "}
          <img
            src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/682ad81d5609ff0ef39ed99e_Brands%20Deal%20Banner_DESKTOP_500.jpeg"
            alt=""
            className="rounded-lg"
          />
        </Link>

        <Link>
          {" "}
          <img
            src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/682ada905609ff0ef3a1ad5d_Deals%20on%20Toys%20&%20Household%20Items%20banner_DESKTOP_500.jpeg"
            alt=""
            className="rounded-lg"
          />
        </Link>
        <Link>
          <img
            src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/662a3e1b4e4f8663d0a95324_Deal%20Banner%20Commodity%20copy_500.png"
            alt=""
            className="rounded-lg"
          />
        </Link>
      </div>
    </div>
  );
};

export default Deals;
