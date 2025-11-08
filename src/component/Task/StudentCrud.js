// 1️⃣ Start with:
import promptSync from 'prompt-sync';
const prompt = promptSync();

const name = prompt("Enter Name:");
const age = Number(prompt("Enter Age:"));
let student = [];

// Create a function addStudent(name) that adds a new object {id, name} to students.
const AddStudent = (name, age) => {
    const newStudent = {
        // id: Date.now(),
        id: student.length + 1,
        name: name,
        age: age
    }
    student.push(newStudent)
}

AddStudent(name, age)
console.log('The Student Details', typeof (student))
// AddStudent("Safwan", 23)

// console.log("All Students:", student);

// 3️⃣ Create a function getStudents() that logs all students.

// const getStudents = () => {
//     console.log('All Student', student)
// }
// getStudents();

//4️⃣ Create a function editStudent(id, newName) that updates student’s name using .map().
const Editdata = (id, newname) => {

    let updateName = student.map((s) => {
        if (s.id === id) {
            return { ...s, name: newname }
        }
        else {
            return s
        }
    })
    console.log('The Newname is:', updateName)
}
Editdata(1, "Hamza");

// 5️⃣ Create a function deleteStudent(id) that removes student using .filter().
// working but without Function
// let deleteStudent = student.filter((d) => {
//         let dlt = d.id === 1
//         return dlt;
//     })
// console.log('Delete', deleteStudent)
// console.log('StudentRemainsAfterDelete', student)
// const deleteStd = (id) => {
//     let dStudent = student.filter((d) => d.id !== id)
//     console.log('Delete Item', dStudent)
// };
// deleteStd(2);