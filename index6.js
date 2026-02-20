import express from 'express'
const app = express()
app.listen(8080)
// app.get("/:name", (req,res) => {
//     res.send("Hello " +req.params.name);
// })

// http://localhost:8080/name/john
// app.get("/name/:name",()=>{})

// http://localhost:8080/?name=john
// app.get("/",()=>{})

// app.get("/", (req,res) => {
//     res.send("Hello " +req.query.name);
// })

// also age
// http://localhost:8080/?name=john&age=21
// app.get("/",()=>{})

app.get("/", (req,res) => {
    res.send("Hello " +req.query.name + req.query.age);
})