import React from "react";

type PersonPropsType = {
  name: string;
  age: number;
  address: string;
  section: string;
};

export default function Person({
  name,
  age,
  address,
  section,
}: PersonPropsType) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{address}</p>
      <p>{section}</p>
    </div>
  );
}
