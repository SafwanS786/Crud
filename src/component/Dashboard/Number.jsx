import React, { useState, useEffect } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  const target = 100;

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [show, setShow] = useState(true);

  const handletext = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    if (!show) return;
    const interval = setInterval(() => {
      setNumber((prev) => {
        if (prev < target) {
          return prev + 5; // increase slowly
        } else {
          clearInterval(interval); // stop when done
          return target;
        }
      });
    }, 100);

    return () => clearInterval(interval); // cleanup
  }, [show]);

  return (
    <>
      <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{number}</div>

      <button
        onClick={() => setCount(count + 1)}
        className="border border-[#f2f2f2] px-2 py-1 bg-white rounded-lg hover:text-gray-700 cursor-pointer"
      >
        Click
      </button>

      <p>{count}</p>
      <div className="bg-gray-300 rounded-lg p-1 inline-block">
        <input type="text" onChange={handletext} value={text} />
      </div>
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
      {console.log("show che", show)}
      {show && <p>{text}</p>}
      {/* {console.log("setShow", show)} */}
    </>
  );
}
