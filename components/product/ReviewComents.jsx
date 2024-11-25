"use client";

import React from "react";
import { FaRegStar } from "react-icons/fa";
import SectionHead from "../common/SectionHead";

const ReviewComents = ({ reviews }) => {
  return (
    <div className="space-y-4">
      <SectionHead title="product reviews" />

      <div className="product-review-margin">
        {reviews.map((review, index) => {
          const rating = Number(review.rating);
          return (
            <article className="product-review-box" key={index}>
              <div className="flex gap-x-4 py-2">
                <div className="w-12 h-12 rounded-full borders"></div>
                <div>
                  <div className="flex">
                    {[...Array(rating)].map((_, index) => (
                      <FaRegStar />
                    ))}
                  </div>
                  <div>{review.customerName}</div>
                </div>
              </div>
              <div>
                <p>{review.comment}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewComents;
