import React, { useEffect, useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
export default function AddName() {
  const [Name, setName] = useState(() => {
    const storeData = localStorage.getItem("Name");
    return storeData ? JSON.parse(storeData) : [];
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [searchname, setSearchName] = useState("");
  const [edit, setEdit] = useState(null);
  const [currentpage, setCurrentPage] = useState(1);
  const itemPerPage = 5;

  const indexOfLastItem = currentpage * itemPerPage;
  const indexofFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = Name.slice(indexofFirstItem, indexOfLastItem);
  useEffect(() => {
    console.log("indexofFirstItem==>", indexofFirstItem);
    console.log("indexofLastItem=>", indexOfLastItem);
  }, []);

  console.log("data", currentItem);
  const handleFirstInput = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastInput = (e) => {
    setLastName(e.target.value);
  };
  const handleSearch = (e) => {
    const src = e.target.value;
    setSearchName(src);

    if (src.trim() === "") {
      setCurrentPage(1);
      return;
    }
    const matchedItem = Name.find(
      (item) =>
        item.firstname.toLowerCase().includes(query) ||
        item.lastname.toLowerCase().includes(query)
    );

    if (dipped) {
      // Calculate which page it's on
      const itemIndex = Name.indexOf(matchedItem);
      const pageNumber = Math.floor(itemIndex / itemPerPage) + 1;
      setCurrentPage(pageNumber);
    } else {
      // No match? Stay on page 1
      setCurrentPage(1);
    }
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
  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEdit(null);
  };
  const filteredData = Name.filter(
    (val) =>
      val.firstname.toLowerCase().includes(searchname.toLowerCase()) ||
      val.lastname.toLowerCase().includes(searchname.toLowerCase())
  );
  const currentItem1 = filteredData.slice(indexofFirstItem, indexOfLastItem);

  return (
    <div className="min-h-screen w-full bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white shadow-xl p-8 border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-800">Adding Name</h1>
          <div className="mt-4">
            <label className="text-gray-700 font-medium mb-2 block">
              Search Name
            </label>
            <div className="relative flex flex-row gap-4 items-center">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search.."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                onChange={handleSearch}
                value={searchname}
              />
            </div>
          </div>
          <div className="rounded-2xl grid grid-cols-2 gap-3 mt-8">
            <input
              type="text"
              onChange={handleFirstInput}
              value={firstName}
              placeholder="Enter Name"
              className="w-full p-2 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <input
              type="text"
              onChange={handleLastInput}
              value={lastName}
              placeholder="Enter Last Name"
              className="w-full p-2 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
          <div className="flex flex-row gap-4 items-center mt-6 ">
            <button
              className={`p-2 text-white px-10 rounded-2xl cursor-pointer ${
                edit
                  ? "bg-yellow-400 hover:bg-amber-400 text-white"
                  : "bg-blue-800 hover:bg-blue-300"
              }`}
              onClick={handleAdd}
            >
              {edit ? "Update" : "Add"}
            </button>
            {edit && (
              <button
                onClick={handleReset}
                className="bg-red-700 p-2 px-6 rounded-2xl cursor-pointer text-white"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
        <div className="mt-10 bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden">
          <table className="min-w-full border-collapse">
            <thead className="bg-blue-50">
              <tr className="text-left">
                {/* <th className="p-4 font-semibold text-gray-700">ID</th> */}
                <th className="p-4 font-semibold text-gray-700">Name</th>
                <th className="p-4 font-semibold text-gray-700">LastName</th>
                <th className="p-4 font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {Name.filter(
                (val) =>
                  val.firstname
                    .toLowerCase()
                    .includes(searchname.toLowerCase()) ||
                  val.lastname.toLowerCase().includes(searchname.toLowerCase())
              )
                .slice(indexofFirstItem, indexOfLastItem)
                .map((value) => {
                  // {Name.map((value) => {
                  return (
                    <tr
                      className="hover:bg-gray-50 border-t border-gray-100"
                      key={value.id}
                    >
                      {/* <td className="text-xl text-gray-600 p-3">
                        {value.id}
                      </td> */}
                      <td className="text-xl text-gray-600 p-3">
                        {value.firstname}
                      </td>
                      <td className="text-xl text-gray-600 p-3">
                        {value.lastname}
                      </td>
                      <td className="p-3  flex flex-row gap-2">
                        <button
                          className="px-3 py-1 bg-red-500 text-white rounded-2xl cursor-pointer  hover:bg-red-600 transition"
                          onClick={() => handleDelete(value.id)}
                        >
                          Delete
                        </button>
                        <button
                          className="px-3 py-1 bg-green-300 text-white rounded-xl cursor-pointer hover:bg-green-600 transition"
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
          <div className="flex justify-end items-center mt-4 gap-2">
            <div className="text-sm text-gray-500 mt-2">
              <p>Showing </p>
              <span className="font-semibold">
                {Name.length === 0 ? 0 : indexofFirstItem + 1}
                {/* {console.log("indexOfFirstItem", indexofFirstItem)}
                {console.log("Last", indexOfLastItem)} */}
              </span>{" "}
              to
              {/* {Name.length === 0 ? 0 : indexOfLastItem} */}
              {indexOfLastItem > Name.length ? Name.length : indexOfLastItem}
              {/* {currentItem} */}
              {console.log("object", Name.length)}
            </div>
            <div>
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentpage === 1}
                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="font-bold">Page {currentpage}</span>

              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    prev < Math.ceil(Name.length / itemPerPage)
                      ? prev + 1
                      : prev
                  )
                }
                disabled={currentpage === Math.ceil(Name.length / itemPerPage)}
                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
