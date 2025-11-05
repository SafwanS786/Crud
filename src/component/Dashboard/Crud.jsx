import React, { useEffect, useState } from "react";

export default function StudentCRUD() {
  const [students, setStudents] = useState([]);
  const [editdata, setEditdata] = useState(null); // { id, ...data }
  const [newStudent, setNewStudent] = useState({
    name: "",
    university: "",
    degree: "",
    semester: "",
    department: "",
  });

  // Load from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("student");
    if (savedData) {
      setStudents(JSON.parse(savedData));
    }
  }, []);

  // Save to localStorage whenever students change
  useEffect(() => {
    if (students.length > 0) {
      localStorage.setItem("student", JSON.stringify(students));
    }
  }, [students]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  // EDIT: Load student into form
  const handleEdit = (id) => {
    const studentToEdit = students.find((s) => s.id === id);
    if (studentToEdit) {
      setEditdata(studentToEdit); // store full object
      setNewStudent({
        name: studentToEdit.name,
        university: studentToEdit.university,
        degree: studentToEdit.degree,
        semester: studentToEdit.semester,
        department: studentToEdit.department,
      });
    }
  };

  // ADD or UPDATE
  const handleSubmit = () => {
    if (!newStudent.name) return alert("Please enter student name");

    let updatedStudents;

    if (editdata) {
      // UPDATE existing
      updatedStudents = students.map((s) =>
        s.id === editdata.id ? { ...s, ...newStudent } : s
      );
      alert("Student updated successfully!");
    } else {
      // ADD new
      const newEntry = {
        ...newStudent,
        id: Date.now(), // better than length+1
      };
      updatedStudents = [...students, newEntry];
      alert("Student added successfully!");
    }

    setStudents(updatedStudents);
    resetForm();
  };

  // Reset form & edit mode
  const resetForm = () => {
    setNewStudent({
      name: "",
      university: "",
      degree: "",
      semester: "",
      department: "",
    });
    setEditdata(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };
  const arr = [1, 2, 3];
  let arr1 = [...arr, 4];
  console.log("This data is Dummy", arr1);
  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-blue-700">
        Student Management CRUD
      </h1>

      {/* FORM */}
      <div className="border p-6 rounded-lg shadow-lg bg-white">
        <h2 className="font-semibold text-xl mb-4">
          {editdata ? "Edit Student" : "Add New Student"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {["name", "university", "degree", "semester", "department"].map(
            (field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={newStudent[field]}
                onChange={handleChange}
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )
          )}
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            className={`px-6 py-2 text-white rounded-lg font-medium ${
              editdata
                ? "bg-orange-500 hover:bg-orange-600"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {editdata ? "Update Student" : "Add Student"}
          </button>

          {editdata && (
            <button
              onClick={resetForm}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto border rounded-lg shadow-md">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-3 border text-left">ID</th>
              <th className="p-3 border text-left">Name</th>
              <th className="p-3 border text-left">University</th>
              <th className="p-3 border text-left">Degree</th>
              <th className="p-3 border text-left">Semester</th>
              <th className="p-3 border text-left">Department</th>
              <th className="p-3 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center p-6 text-gray-500">
                  No students added yet.
                </td>
              </tr>
            ) : (
              students.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50">
                  <td className="p-3 border">{s.id}</td>
                  <td className="p-3 border">{s.name}</td>
                  <td className="p-3 border">{s.university}</td>
                  <td className="p-3 border">{s.degree}</td>
                  <td className="p-3 border">{s.semester}</td>
                  <td className="p-3 border">{s.department}</td>
                  <td className="p-3 border text-center">
                    <button
                      onClick={() => handleEdit(s.id)}
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(s.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
