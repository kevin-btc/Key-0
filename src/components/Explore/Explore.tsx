import React, { useState } from "react";
import _ from "lodash";

import "react-medium-image-zoom/dist/styles.css";

import db from "../../json-server/db.json";

import Zoom from "react-medium-image-zoom";

type nftType = {
  ipfs: string;
  name: string;

  trait_type?: string;
  value?: string;
};

const OFFSET = 12;

const Explore = ({ loadBtn }: { loadBtn: boolean }) => {
  const allnNft: nftType[] = db.collection;

  const [nft, setNFT] = useState(allnNft.slice(0, OFFSET));
  const [page, setPage] = useState(0);

  function onClickMore() {
    setNFT((prev) => [
      ...prev,
      ...allnNft.slice((page + 1) * OFFSET, (page + 1) * OFFSET + OFFSET),
    ]);

    setPage((prev) => prev + 1);
  }

  return (
    <section className="explore-area p-5">
      <div className="container" id="explore">
        <div className="row">
          <div className="col-12">
            {/* Intro */}
            <div className="intro d-flex justify-content-between align-items-end m-0">
              <div className="intro-content">
                <span>Exclusive Assets</span>
                <h3 className="mt-3 mb-0">Explore</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row items">
          {nft.map((item, id) => {
            return (
              <div key={id} className="col-12 col-sm-6 col-lg-3 item">
                <div className="card">
                  <div className="image-over">
                    <Zoom
                      overlayBgColorEnd="rgba(0, 0, 0, 0.5)"
                      overlayBgColorStart="rgba(0, 0, 0, 0)"
                      closeText="Click to Close"
                      openText="Click to See picture"
                    >
                      <img src={item.ipfs} alt={item.name} />
                    </Zoom>
                  </div>
                  {/* Card Caption */}
                  <div className="card-caption col-12 p-0">
                    {/* Card Body */}
                    <div className="card-body">
                      <h5 className="mb-0">{item.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {loadBtn && (
          <div className="row" onClick={() => onClickMore()}>
            <div className="col-12 text-center">
              <button className="btn btn-bordered-white mt-5">Load More</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Explore;
