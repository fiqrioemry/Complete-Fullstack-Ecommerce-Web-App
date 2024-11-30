import React from "react";
import SectionHead from "../common/SectionHead";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <section className="section-wrapper">
      <div className="section-head">
        <span className="w-2 h-10 bg-primary"></span>
        <h2 className="capitalize">product categories</h2>
      </div>
      <div className="section-body">
        <div className="content-grid-4">
          <CategoryCard />
        </div>
      </div>
    </section>
  );
};
export default Categories;
