import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex bg-black h-screen w-screen justify-center items-center text-orange-600 font-bold text-xl sm:text-2xl">
      <div>
        <span className="border-r border-orange-600 pr-2">404!</span>
        <span className="pl-2">Page Not Found</span>
      </div>
    </div>
  );
};

export default PageNotFound;
