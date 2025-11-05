import React, { useEffect, useState } from "react";

export default function StudentCRUD() {
  const [students, setStudents] = useState([]);
  const [editdata, setEditdata] = useState(null);
  const [newStudent, setNewStudent] = useState({
    name: "",
    university: "",
    degree: "",
    semester: "",
    department: "",
  });

  console.log("what is this", newStudent);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
    console.log("handleChange", name, value);
  };

  const handleEdit = (id) => {
    const studentEdit = students.find((s) => s.id === id);
    if (studentEdit) {
      setEditdata(studentEdit);
      setNewStudent({
        name: studentEdit.name,
        university: studentEdit.university,
        degree: studentEdit.degree,
        semester: studentEdit.semester,
        department: studentEdit.department,
      });
    }
    setEditdata(id);
    setStudents(students);
  };
  console.log("Data", editdata);
  const handleAdd = () => {
    if (!newStudent.name) return alert("Please enter student name");

    // const total =
    //   Number(newStudent.internal || 0) + Number(newStudent.external || 0);

    const newEntry = {
      ...newStudent,
      id: students.length + 1,
      //   total,
    };

    const updatedata = [...students, newEntry];

    setStudents(updatedata);

    localStorage.setItem("student", JSON.stringify(updatedata));

    //clear form
    setNewStudent({
      name: "",
      university: "",
      degree: "",
      semester: "",
      department: "",
    });
  };

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
  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center text-blue-700">
        🎓 Student Management CRUD
      </h1>

      <div className="border p-4 rounded-lg shadow-md bg-gray-50">
        <h2 className="font-semibold text-lg mb-3">Add New Student</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newStudent.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="university"
            placeholder="University"
            value={newStudent.university}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={newStudent.degree}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="semester"
            placeholder="Semester"
            value={newStudent.semester}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={newStudent.department}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        <button
          onClick={handleAdd}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
        >
          ➕ Add Student
        </button>
      </div>

      <div className="overflow-x-auto border rounded-lg shadow-md">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-blue-100 text-left">
            <tr>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">University</th>
              <th className="p-2 border">Degree</th>
              <th className="p-2 border">Semester</th>
              <th className="p-2 border">Department</th>
              <th className="p-2 border">Action</th>
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
                  <td className="p-2 border">{s.id}</td>
                  <td className="p-2 border">{s.name}</td>
                  <td className="p-2 border">{s.university}</td>
                  <td className="p-2 border">{s.degree}</td>
                  <td className="p-2 border">{s.semester}</td>
                  <td className="p-2 border">{s.department}</td>
                  <td className="p-2 border text-center">
                    <div className="inline-flex flex-row gap-2">
                      <button
                        onClick={() => handleDelete(s.id)}
                        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600  cursor-pointer"
                      >
                        Delete
                      </button>
                      <button
                        className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer"
                        onClick={() => handleEdit(s.id)}
                      >
                        Edit
                      </button>
                    </div>
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
