import React, { useState } from "react";

export default function Todo() {
  const [Text, setText] = useState([]);
  const [name, setName] = useState("");
  const [Lname, setLName] = useState("");
  const handlename = (e) => {
    setName(e.target.value);
  };
  const handlelastname = (e) => {
    setLName(e.target.value);
  };
  const handleAdd = () => {
    if (name.trim() === "" || Lname.trim() === "")
      return alert("Please Fill Text");
    const newObj = {
      id: Text.length + 1,
      name: name,
      Lname: Lname,
    };
    setText([...Text, newObj]);
    setName("");
    setLName("");
  };
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold">Todo List</h1>
        <div className="bg-white border border-[#f2f2f2] p-2">
          <div className="flex flex-row justify-between gap-3 mt-10">
            <input
              type="text"
              placeholder="Enter Name"
              onChange={handlename}
              value={name}
              className="w-full p-2 pr-4 py-3 border border-gray-300
            rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <input
              type="text"
              placeholder="Enter Surname"
              value={Lname}
              onChange={handlelastname}
              className="w-full p-2 pr-4 py-3 border border-gray-300
            rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
          <button
            className="mt-10 bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:scale-105"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>

      {Text.map((item, index) => {
        return (
          <div key={index} className="">
            <div>
              <h2>{item.name}</h2>
            </div>
            <div>
              <h3>{item.Lname}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
