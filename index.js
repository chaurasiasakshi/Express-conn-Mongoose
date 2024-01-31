const mongoose = require("mongoose");
const express = require("express");

app = express();
port = 3000;
app.listen(port, () => { `server is running on ${port}` });

// Connection With MongoDB
mongoose.connect("mongodb://localhost:27017/Node").then(() => {
    console.log("connected successfully");
}).catch((error) =>
    console.log(error));

// Create Schema
EmpSchema =  mongoose.Schema({
    name: { 
        type: String,
        required: true
     },
    mobile: { 
        type: Number, 
        required: true 
    },
    age: { 
        type: Number,
        required: true 
    },
    salary: {
        type: Number,
        required: true
    },
    married:{
        type:Boolean,
        required:true
    },
    date:{
        type:Date,
        default: Date.now()
    }
});

employee= new mongoose.model('emp', EmpSchema);

// createEmp = async()=>{
//     try{
//         new employee({
//             name:"John Doe",
//             mobile:9876543210,
//             age:28,
//             salary:10000,
//             married:false
//         });
//         console.log("Employee created");
//         await  employee.save();

//     }catch (error){
// console.log(error)
//     }
// }

// Insert Data

createEmp = new employee(
    {
        name:"Sakshi Chaurasia",
        mobile:9876543210,
        age:20,
        salary:20000,
        married:false
    });

createEmp.save();
console.log(`Data inserted : ${createEmp}`);