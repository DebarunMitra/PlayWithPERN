const express = require("express");
const cors = require("cors");
const pool = require("./config/db");

const app = express();


//middlewares
app.use(cors());
app.use(express.json());

//Routes

//create todo
app.post("/todos", async(req, res)=>{
    try {
         const {description} = req.body;
         const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);

         res.json(newTodo.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

//get todo

//update todo

//delete todo
 
const PORT = process.env.PORT || 5000 ; 

app.listen(PORT, ()=>{
    console.log(`Server Up in ${PORT}`);
})