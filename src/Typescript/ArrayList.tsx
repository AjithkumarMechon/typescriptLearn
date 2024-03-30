import React from "react";

interface nameList {
  first: string;
  last: string;
}
type PersonListArray = {
  nameList: nameList[];
};
export default function ArrayList({ nameList }: PersonListArray) {
  return (
    <div>
      {nameList.map((name, index) => {
        const { first, last } = name;
        return (
          <h2 key={index}>
            {first} {last}
          </h2>
        );
      })}
    </div>
  );
}
