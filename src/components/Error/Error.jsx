import React from "react";
import { Alert } from "@material-tailwind/react";

const Error = () => {
  return (
    <div className="h-screen grid grid-cols-1 items-center justify-items-center">
      <div className="w-[96%]">
        <Alert color="red" className="text-xl font-inter font-bold">
          No products match your filter. Clear filter and try again.
        </Alert>
      </div>
    </div>
  );
};

export default Error;
