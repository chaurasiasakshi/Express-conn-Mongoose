express = require("express");
app = express();
port = 3000
Student = require('./database.js')

app.listen(port,()=>{
    console.log(`Running on ${port}`);
});

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',async(req,res)=>{
    students = await Student.find()
    res.render("index",{
        page:"CRUD  with  NodeJS and MongoDB - Home Page" ,
        title : "Dashboard",
        students:students});
});


app.post("/register",async(req,res)=>{
    const {name , mail , age} = req.body;
    newStudent = new Student({
        name , mail , age
    });

    studentsave = await newStudent.save();
    res.redirect("/");

});

app.get("/register",(req,res)=>{
    res.render("register")
})

