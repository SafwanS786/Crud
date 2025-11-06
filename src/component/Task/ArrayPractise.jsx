import React, { useState } from "react";

export default function ArrayPractise() {
  const [add, setAdd] = useState([]);
  const handleInc = () => {
    // setAdd(add + 2);
    const nextNumber = add.length + 1;
    setAdd([...add, nextNumber]);
    //   console.log("Add is what", add);
  };
  console.log("Add is what", add);
  return (
    <div className="mt-4">
      <div>
        <h1 className="text-2xl">Hello</h1>
      </div>
      <button
        className="border border-[#f2f2f2] bg-white rounded-2xl px-2 py-1 hover:bg-[#126f77]
       cursor-pointer hover:text-white hover:scale-105"
        onClick={handleInc}
      >
        Click Me
      </button>
      <h1>{add.join(",")}</h1>
    </div>
  );
}
