import React from 'react';

 const Shallow_deep_copy = () => {
  let nameIt = [0,1,2,0,2,0,5,4];
  
  // deep copy using spread operator
  let deep = [...nameIt];
  let shalow = nameIt;

   nameIt[0]=52;
  console.log("original",nameIt);
  console.log("deep",deep);
  console.log("shallow",shalow);

  return (
    <>
    
    </>
  );
};
export default React.memo(Shallow_deep_copy)