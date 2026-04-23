const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(express.static('public'));

app.get(
    "/", (req,res)=>{
        res.sendFile(path.join(__dirname, "public", "index.html")
    }
);

app.listen(
    PORT, () =>{
        console.log(`your frontend is running on http://localhost`)
    }
)

