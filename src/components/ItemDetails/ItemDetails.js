import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Zoom from "react-medium-image-zoom";

import db from "../../json-server/db.json";

const ItemDetails = () => {
  const { id } = useParams();
  const [nft, setNft] = useState();

  useEffect(() => {
    const selectedNft = db.collection[id];

    setNft(selectedNft);
  }, []);

  if (!nft) {
    return "Loading...";
  }

  return (
    <section className="item-details-area">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-5">
            <div className="item-info">
              <div className="item-thumb text-center">
                <Zoom
                  overlayBgColorEnd="rgba(0, 0, 0, 0.5)"
                  overlayBgColorStart="rgba(0, 0, 0, 0)"
                  closeText="Click to Close"
                  openText="Click to See picture"
                >
                  <img src={nft.ipfs} alt={nft.name} />
                </Zoom>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            {/* Content */}
            <div className="content mt-5 mt-lg-0">
              <h3 className="m-0">{nft.name}</h3>
              <p>{nft.content}</p>
              {/* Item Info List */}
              <div className="item-info-list mt-4">
                <ul className="list-unstyled">
                  <li className="price d-flex justify-content-between">
                    <span>Edition :</span>
                    <span>{`${id + 1} of 6765`}</span>
                  </li>
                  {nft?.type && (
                    <li className="price d-flex justify-content-between">
                      <span>Type : </span>
                      <span>{nft.type}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetails;
