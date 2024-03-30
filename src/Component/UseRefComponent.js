import React, { useRef } from "react";

const UseRefFunction = () => {
  const inputRef = useRef(null);
  return (
    <>
      <input type="text" ref={inputRef} />
    </>
  );
};

export default UseRefFunction;
