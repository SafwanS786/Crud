import React, { useState, useEffect } from "react";

export default function DeleteTextDemo() {
  const [text, setText] = useState("");
  const [deletetext, setDeletetext] = useState(false);
  const word = "Hello Safwan Shaikh";

  useEffect(() => {
    let speed = deletetext ? 50 : 100; // write Text is written in 100ms and delete in 50ms ok.
    // console.log("Speed", speed);

    const handleTyping = setTimeout(() => {
      if (!deletetext) {
        setText((prev) => word.substring(0, prev.length + 1));
        // console.log("Text Write", text);
      } else {
        setText((prev) => word.substring(0, prev.length - 1));
        // console.log("Text Delete", text);
      }
      if (!deletetext && text === word) {
        setTimeout(() => {
          setDeletetext(true);
          console.log("Delete Che", deletetext);
        }, 1000);
      }
      if (deletetext && text === "") {
        console.log("Delete", deletetext);
        setDeletetext(false);
      }
    }, speed);
    return () => clearTimeout(handleTyping);
  }, [text, deletetext]);
  return (
    <div>
      {/* <Todo /> */}
      <div>
        <h1>{text}</h1>
      </div>
    </div>
  );
}
