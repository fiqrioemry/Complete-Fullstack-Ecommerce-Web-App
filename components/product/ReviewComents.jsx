"use client";

import React from "react";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

const ReviewComents = ({ reviews }) => {
  return (
    <section className="section-wrapper">
      <div className="section-head">
        <span className="w-2 h-10 bg-primary"></span>
        <h2 className="capitalize">product reviews</h2>
      </div>

      <div className="section-body overflow-400 borders-tb ">
        {reviews.map((review, index) => {
          const rating = Number(review.rating);
          return (
            <article className="content-wrapper borders p-2" key={index}>
              <div className="flex-center-start">
                <div className="display-wrapper">
                  <div className="image-wrapper">
                    <Image
                      width={80}
                      height={80}
                      src="/assets/empty_cart.png"
                    />
                  </div>
                </div>

                <div className="content-wrapper">
                  <div className="display-wrapper">
                    {[...Array(rating)].map((_, index) => (
                      <FaRegStar key={index} />
                    ))}
                  </div>
                  <div>{review.customerName}</div>
                </div>
              </div>
              <div className="content-wrapper">
                <p>{review.comment}</p>
                <div className="flex-center-end">
                  <button>Like</button>
                  <button>Comment</button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ReviewComents;
