const express = require("express");
const mysql = require("mysql");

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "greenery"
});

app.post('/register', (req, res)=>{
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    db.query("INSERT INTO merchants (username,email,password) VALUES (?,?,?)", [username, email, password], 
        (err, result)=>{
            console.log(err);
        }
    );
});

app.listen(3001, ()=>{
    console.log("Server Running")
});