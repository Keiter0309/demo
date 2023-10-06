const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("first-app"));

app.get('/test',(req,res)=>{
    res.send(`<h1>Hello</h1>`)
})

app.listen(port,()=>{
    console.log(`Server is running ${port}`);
})