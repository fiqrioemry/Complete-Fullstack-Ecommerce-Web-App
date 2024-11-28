"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const AlternativePage = ({ title, button, path }) => {
  const router = useRouter();
  return (
    <div className="h-screen text-4xl uppercase font-medium flex-center">
      <div className="space-y-8">
        <h1>{title}</h1>
        <Button variant="primary" onClick={() => router.push(path)}>
          {button}
        </Button>
      </div>
    </div>
  );
};

export default AlternativePage;
