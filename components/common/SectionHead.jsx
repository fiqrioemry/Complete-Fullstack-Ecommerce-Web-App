import React from "react";

const SectionHead = ({ title }) => {
  return (
    <div className="section-head">
      <div className="w-2 h-10 bg-primary"></div>
      <h2 className="capitalize">{title}</h2>
    </div>
  );
};

export default SectionHead;
