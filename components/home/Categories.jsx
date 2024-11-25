import React from "react";
import SectionHead from "../common/SectionHead";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <section className="home-category-margin">
      <SectionHead title="product categories" />
      <div className="content-grid">
        <CategoryCard />
      </div>
    </section>
  );
};
export default Categories;
