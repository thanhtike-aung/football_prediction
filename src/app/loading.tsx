"use client";

import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

export default function Loading() {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <ClimbingBoxLoader color="#000" />
      </div>
    </>
  );
}
