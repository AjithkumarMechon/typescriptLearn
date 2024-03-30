import React from "react";

interface Greett {
  name: string;
}

const ReactTypescript: React.FC<Greett> = (props) => {
  return (
    <div>
      <p>Ak {props.name}</p>
    </div>
  );
};

export default ReactTypescript;
