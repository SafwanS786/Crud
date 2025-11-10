// 1️⃣ Start with:
import promptSync from 'prompt-sync';
// const prompt = promptSync();

// const name = prompt("Enter Name:");
// const age = Number(prompt("Enter Age:"));
// let student = [];

// Create a function addStudent(name) that adds a new object {id, name} to students.
// const AddStudent = (name, age) => {
//     const newStudent = {
//         // id: Date.now(),
//         id: student.length + 1,
//         name: name,
//         age: age
//     }
//     student.push(newStudent)
// }

// AddStudent(name, age)
// console.log('The Student Details', student)

// console.log('The Student Details', typeof (student))

// AddStudent("Safwan", 23)

// console.log("All Students:", student);

// 3️⃣ Create a function getStudents() that logs all students.

// const getStudents = () => {
//     console.log('All Student', student)
// }
// getStudents();

//4️⃣ Create a function editStudent(id, newName) that updates student’s name using .map().
// const Editdata = (id, newname) => {

//     let updateName = student.map((s) => {
//         if (s.id === id) {
//             return { ...s, name: newname }
//         }
//         else {
//             return s
//         }
//     })
//     console.log('The Newname is:', updateName)
// }
// Editdata(1, "Hamza");

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

let openQuestion = null;

function toggleQuestion(index) {
    if (openQuestion === index) {
        openQuestion = null; // close it
    } else {
        openQuestion = index; // open that one
    }
    console.log("Now open question:", openQuestion);
}

toggleQuestion(0);
toggleQuestion(0);
// closes question 1
// opens question 0
// toggleQuestion(1); // opens question 1, closes 0
// toggleQuestion(0)
const student = { id: 1, name: "safah", age: 20 };
console.log('Student', student)
console.log('Student', typeof (student))

const jsontext = JSON.stringify(student)
console.log('Jsontext', jsontext)
console.log('Jsontext', typeof (jsontext))

const prstext = JSON.parse(jsontext)
console.log('prsText', prstext)
console.log('prsText', typeof (prstext))//object

let a = [1, 2, 3, 9, 4, 5, 7, 6, 90];
let cnt = Math.max(...a)
console.log('Max', cnt)
let see = Math.max([1, 2, 3, 9, 4, 5, 7, 6]);
console.log('See', see)