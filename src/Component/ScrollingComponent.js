import React, { useRef } from "react";

const ScrollToElementExample = () => {
  const scrollRef = useRef(null);

  const handleClick = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <button onClick={handleClick}>Scroll to Element</button>
      <div style={{ height: "80vh" }}>Content above</div>
      <div style={{ height: "30vh" }} ref={scrollRef}>
        Element to scroll to
      </div>
    </div>
  );
};

export default ScrollToElementExample;
