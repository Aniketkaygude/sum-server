
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const arr = [
  { name: "Aniket", age: 22, gender: "Male" },
  { name: "Riya", age: 25, gender: "Female" },
  { name: "Aman", age: 28, gender: "Male" },
  { name: "Sneha", age: 21, gender: "Female" },
  { name: "Vikram", age: 30, gender: "Male" },
  { name: "Pooja", age: 24, gender: "Female" },
  { name: "Rohan", age: 26, gender: "Male" },
  { name: "Kavya", age: 23, gender: "Female" },
  { name: "Yash", age: 27, gender: "Male" },
  { name: "Neha", age: 22, gender: "Female" },
  { name: "Arjun", age: 29, gender: "Male" }
];

app.get("/",(req,res)=>{
    return res.send("welcome to TODO route");
})

app.get("/todos",(req,res)=>{
    return res.json({
        todos:arr
    })
})

app.listen(3000);