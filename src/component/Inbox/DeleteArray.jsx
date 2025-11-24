// import React, { useState, useEffect } from "react";

// export default function DeleteArray() {
//   const [text, setText] = useState("");
//   const [deletetext, setDeletetext] = useState(false);
//   const [index, setIndex] = useState(0);
//   const word = ["Hello", "Bhai", "Shaikh"];

//   useEffect(() => {
//     let currentWords = word[index];
//     console.log("Which Index", currentWords);
//     let speed = deletetext ? 50 : 100; // write Text is written in 100ms and delete in 50ms ok.
//     // console.log("Speed", speed);

//     const handleTyping = setTimeout(() => {
//       if (!deletetext) {
//         const NewText = currentWords.substring(0, text.length + 1);
//         setText(NewText);
//         // setText((prev) => word.substring(0, prev.length + 1));
//         // console.log("Text Write", text);
//       } else {
//         const DltText = currentWords.substring(0, text.length - 1);
//         setText(DltText);
//         // setText((prev) => word.substring(0, prev.length - 1));
//         // console.log("Text Delete", text);
//       }
//       if (!deletetext && text === word) {
//         setTimeout(() => {
//           setDeletetext(true);
//           console.log("Delete Che", deletetext);
//         }, 1000);
//       }
//       if (deletetext && text === "") {
//         console.log("Delete", deletetext);
//         setDeletetext(false);
//       }
//     }, speed);
//     return () => clearTimeout(handleTyping);
//   }, [text, deletetext]);
//   return (
//     <div>
//       {/* <Todo /> */}
//       <div>
//         <h1>{text}</h1>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";

export default function DeleteArray() {
  const [text, setText] = useState("");
  const [deletetext, setDeletetext] = useState(false);
  const [index, setIndex] = useState(0);
  const word = ["Hello", " Bhai", "Shaikh"];

  useEffect(() => {
    let currentWord = word[index];
    // console.log("Current", currentWord);
    let speed = deletetext ? 50 : 100;

    const handleTyping = setTimeout(() => {
      // ----------- TYPING -----------
      if (!deletetext) {
        const newText = currentWord.substring(0, text.length + 1);
        setText(newText);

        // When finished typing current word
        if (newText === currentWord) {
          setTimeout(() => setDeletetext(true), 800);
          //   console.log("true");
        }
      }

      // ----------- DELETING -----------
      else {
        const deleteText = currentWord.substring(0, text.length - 1);
        setText(deleteText);

        // When word is fully deleted
        if (deleteText === "") {
          setDeletetext(false);
          setIndex((prev) => (prev + 1) % word.length); // NEXT WORD
        }
      }
    }, speed);

    return () => clearTimeout(handleTyping); 
  }, [text, deletetext, index]); // ← FIXED dependency

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}
