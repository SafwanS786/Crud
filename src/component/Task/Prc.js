// add 4 at the end using spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4]
console.log("data", arr2);

// change age to 21 without modifying original directly
const person = { name: "Ali", age: 20 }
const newObj = { ...person, age: 21 }
console.log("NewObj", newObj)

// 3️⃣ Create an array of objects (like students), and access one student’s name.
const student = [{ id: 1, name: "shaikh", age: 20 }, { id: 2, name: "safwan", age: 23 }]
console.log("Student", student[1])

// 4️⃣ Use .find() to get a student whose id = 3.

const findStudent = student.find((s) => s.id === 1)
console.log('Find', findStudent)

// 5️⃣ Use .filter() to remove a student whose id = 2.
// let flt = student.filter((s) => s.name === "shaikh") 
let flt = student.filter((s) => s.id === 2)
console.log('Filter', flt)

// with name also

// 6️⃣ Use .map() to update a student’s name whose id = 1.

// let updateName = student.map((s) => {
//     // console.log("S what", s)
//     if (s.id === 1) {
//         return { ...s, name: "Bhai" }// old object but change the name Bhai
//     }
//     return s
// })
// console.log('Update', updateName)

// 7️⃣ Use .forEach() to print all student names.

student.forEach((n) => {
    console.log("Name is:", n.name)

})
// 8️⃣ Store the array in localStorage and then retrieve it.

// localStorage.setItem("PrcTask", JSON.stringify(student))

const arr = [1, 2, 3, 4, 5, 6]
const sl = arr.slice(0, 3)
console.log('Array', sl)

// cd D:\Ziaat_Project\src\component\Task
