import React, { useEffect, useState } from "react";

export default function AddName() {
  const [Name, setName] = useState(() => {
    const storeData = localStorage.getItem("Name");
    return storeData ? JSON.parse(storeData) : [];
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [edit, setEdit] = useState(null);
  const handleFirstInput = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastInput = (e) => {
    setLastName(e.target.value);
  };

  const handleAdd = () => {
    if (firstName.trim() === "" || lastName.trim() === "")
      return alert("Please Fill Text");

    if (edit) {
      const updated = Name.map((item) =>
        item.id === edit
          ? { ...item, firstname: firstName, lastname: lastName }
          : item
      );
      setName(updated);
      setEdit(null);
      setFirstName("");
      setLastName("");
      return;
    }
    const newObj = {
      id: Date.now(),
      //   id: Name.length + 1,
      firstname: firstName,
      lastname: lastName,
    };
    setName([...Name, newObj]);
    setFirstName("");
    setLastName("");
  };
  //   useEffect(() => {
  //     const storeData = localStorage.getItem("Name");
  //     if (storeData) {
  //       setName(JSON.parse(storeData));
  //     }
  //   }, []);
  useEffect(() => {
    localStorage.setItem("Name", JSON.stringify(Name));
  }, [Name]);
  //   This is Working
  // but i have taken up in Name,setName
  //   useEffect(() => {
  //     if (Name.length > 0) {
  //       localStorage.setItem("Name", JSON.stringify(Name));
  //     }
  //   }, [Name]);
  //   getdata = localStorage.getItem("Name");
  const handleDelete = (id) => {
    if (window.confirm("Are u sure u want to Delete")) {
      const flt = Name.filter((s) => s.id !== id);
      setName(flt);
    }
  };
  const handleEdit = (id) => {
    const editItem = Name.find((item) => item.id === id);
    setFirstName(editItem.firstname);
    setLastName(editItem.lastname);
    setEdit(id);
  };
  return (
    <div>
      <div className="bg-white border border-[#f2f2f2] p-4 rounded-2xl">
        <h1 className="text-2xl font-bold text-gray-800">Adding Name</h1>
        <div className="rounded-2xl grid grid-cols-2 gap-3 mt-8">
          <input
            type="text"
            onChange={handleFirstInput}
            value={firstName}
            placeholder="Enter Name"
            className="border border-black p-2"
          />
          <input
            type="text"
            onChange={handleLastInput}
            value={lastName}
            placeholder="Enter Last Name"
            className="border border-black p-2"
          />
        </div>
        <div>
          <button
            className="bg-blue-800 mt-6 p-2 text-white px-10 rounded-2xl hover:bg-blue-300 cursor-pointer"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>LastName</th>
          </tr>
        </thead>
        <tbody>
          {Name.map((value) => {
            return (
              <tr className="" key={value.id}>
                <td className="text-xl text-gray-600 p-3 border">
                  {value.firstname}
                </td>
                <td className="text-xl text-gray-600 p-3 border">
                  {value.lastname}
                </td>
                <td className="p-3 border flex flex-row gap-2">
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded-2xl cursor-pointer"
                    onClick={() => handleDelete(value.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="px-3 py-1 bg-green-300 text-white rounded-xl cursor-pointer"
                    onClick={() => handleEdit(value.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
