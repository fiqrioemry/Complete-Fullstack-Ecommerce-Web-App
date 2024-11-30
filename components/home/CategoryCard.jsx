import React from "react";

import { categoryList } from "@/config";
import ImageElement from "../element/ImageElement";
import Image from "next/image";

const CategoryCard = () => {
  return (
    <>
      {categoryList.map((item, index) => {
        return (
          <article className="card-wrapper text-center" key={index}>
            <div className="image-wrapper border-none">
              <Image
                width={175}
                height={175}
                src={item.image}
                alt={item.title}
              />
            </div>

            <h4>{item.title}</h4>
          </article>
        );
      })}
    </>
  );
};

export default CategoryCard;
