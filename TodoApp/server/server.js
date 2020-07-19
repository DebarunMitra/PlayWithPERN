const express = require("express");
const postGres = require("pg");
const cors = require("cors");

const app = express();


//middlewares
app.use(cors());
app.use(express.json());
 
const PORT = process.env.PORT || 5000 ; 

app.listen(PORT, ()=>{
    console.log(`Server Up in ${PORT}`);
})