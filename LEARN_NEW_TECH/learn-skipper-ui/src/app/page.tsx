import WrapButton from "@/components/ui/wrap-button";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center gap-2 container flex-col mx-auto p-4">
      <h1 className="text-white text-2xl">Hello Next JS</h1>
      <WrapButton target="blank" href="https://www.github.com/xshshahab">
        Get Started
      </WrapButton>
    </div>
  );
};

export default page;
