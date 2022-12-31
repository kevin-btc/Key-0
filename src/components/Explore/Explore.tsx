import React from "react";
import _ from "lodash";

import "react-medium-image-zoom/dist/styles.css";

import db from "../../json-server/db.json";

type nftType = {
  ipfs: string;
  name: string;

  trait_type?: string;
  value?: string;
};

const Explore = ({ loadBtn }: { loadBtn: boolean }) => {
  const nft: nftType[] = db.collection;

  console.log("nft");

  return (
    <section className="explore-area load-more p-5">
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
                  <a
                    href={`/item-details/${id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="image-over">
                      <img src={item.ipfs} alt={item.name} />
                    </div>
                    {/* Card Caption */}
                    <div className="card-caption col-12 p-0">
                      {/* Card Body */}
                      <div className="card-body">
                        <a
                          href={`/item-details/${id}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <h5 className="mb-0">{item.name}</h5>
                        </a>
                        {/* <div className="seller d-flex align-items-center my-3 text-white">
                          <span>Owned By</span>
                          <h6 className="ml-2 mb-0">{item.owner}</h6>
                        </div>
                        <div className="card-bottom d-flex justify-content-between">
                          <span>{item.price} eGLD</span>
                          <span>
                            {item.count === 1
                              ? "Unique edition"
                              : `Serie of ${item.count}`}
                          </span>
                        </div> */}
                      </div>
                    </div>
                  </a>
                  {/* <button
                    className=" btn btn-small mt-3"
                    onClick={() => onBuy(item)}
                  >
                    BUY
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>
        {loadBtn && (
          <div className="row">
            <div className="col-12 text-center">
              <button id="load-btn" className="btn btn-bordered-white mt-5">
                Load More
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Explore;
