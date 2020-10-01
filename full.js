const nam = require('./app.js')
const express = require("express")
const app = express();
const port = 1000;

const fs = require("fs")
fs.writeFileSync('testing.txt', "a new file was created");
fs.appendFileSync('testing.txt', "I live in Ferndale now");

app.get("/", (req,res)=>{
  res.send("hello server");
})

app.listen(port, ()=>{
  console.log(`server is running on port: ${port}`);
})
