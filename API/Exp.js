import express from "express";
const app = express();
import cors from "cors";

app.use(cors());



app.get("/", (req, res) => {
    res.send("Welcome to Safwan's Express Server Shaikh Shafwan Samsulhaak Bhai ");
});
app.get("/user", (req, res) => {
    res.json([
        { name: "Safwan Shaikh Bhai", age: 24 },
        { name: "Safah", age: 20 },
        { name: "shaikh", age: 20 },
        { name: "Bhai", age: 22 }   
    ]);
})
app.get("/about", (req, res) => {
    res.send("This is the about page of Safwan's Express Server Bhai Safwan Samsulhak");
    // res.json([
    //     { name: "Safwan Shaikh Bhai", age: 24 },
    //     { name: "Safah", age: 20 },
    //     { name: "shaikh", age: 20 }
    // ]);
})


app.listen(3001, () => console.log('Server 3001 Running'))