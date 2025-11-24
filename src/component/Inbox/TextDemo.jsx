import React, { useEffect, useState } from "react";

export default function DeleteTextDemo() {
  const [text, setText] = useState("");
  const [deletetext, setDeletetext] = useState(false);
  const word = "Hello Safwan Shaikh";
  useEffect(() => {
    const Safwan = setTimeout(() => {
      setText(word.substring(0, text.length + 1));
      // console.log("What is This", text);
    }, 100);
    const Shaikh = Safwan;
    return () => clearTimeout(Shaikh);
  }, [text]);

  // let newText = word.slice(0, 5);
  // console.log("NewText", newText);
  // useEffect(() => {
  //   let sub = "hello".substring(0, 3);
  //   console.log("SubString", sub);
  // }, []);
  // useEffect(() => {
  //   const Safwan = setTimeout(() => {
  //     setText(word.substring(0, text.length + 1));
  //     console.log("What is This", text);
  //   }, 100);
  //   const Shaikh = Safwan;
  //   return () => clearTimeout(Shaikh);
  // }, [text]);

  // setText((prev) => {
  //   deletetext
  //     ? word.substring(0, prev.length - 1)
  //     : word.substring(0, prev.length + 1);
  // });
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}
