import React from "react";

import { categoryList } from "@/config";
import ImageElement from "../element/ImageElement";

const CategoryCard = () => {
  return (
    <>
      {categoryList.map((item, index) => {
        return (
          <article className="borders p-2 text-center" key={index}>
            <ImageElement
              width={175}
              height={175}
              style="home-category-image"
              path={item.image}
              alt={item.title}
            />

            <h4>{item.title}</h4>
          </article>
        );
      })}
    </>
  );
};

export default CategoryCard;
