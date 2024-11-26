"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Breadcrumb = ({ links }) => {
  const router = useRouter();

  return (
    <div className="flex space-x-1">
      {links.map((title, index) => (
        <div key={index} className="flex items-center space-x-1">
          {index === 0 ? (
            // First item (title "home" but path "/")
            <>
              <button onClick={() => router.push("/")}>{title}</button>
              {links.length > 1 && <span>/</span>}
            </>
          ) : index === links.length - 1 ? (
            // Last item (title only, no navigation)
            <span>{title}</span>
          ) : (
            // Middle items (clickable)
            <>
              <button
                onClick={() =>
                  router.push(`/${links.slice(1, index + 1).join("/")}`)
                }
              >
                {title}
              </button>
              <span>/</span>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
