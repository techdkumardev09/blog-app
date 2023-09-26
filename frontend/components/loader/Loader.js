import React from "react";

export default function Loader() {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center h-full">
        <img
          className="h-48 w-48 rounded-full"
          src="https://assets-v2.lottiefiles.com/a/8f195bf4-1179-11ee-88da-277f023b0f0c/z4c7jIndmE.gif"
          alt="loader"
        />
      </div>
    </div>
  );
}
