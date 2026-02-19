import express from 'express'
const app = express()
// app.listen(8080, () => console.log("Server Started"))
// app.get("/add/:x/:y", (req, res) => {
//     const x = Number(req.params.x)
//     const y = Number(req.params.y)
//     const sum = x + y
//     res.send(`Sum is ${sum}`)
// })

// app.listen(8080, () => console.log("Server Started"))
// app.get("/add/x/:x/y/:y/z/:z", (req, res) => {
//     const x = Number(req.params.x)
//     const y = Number(req.params.y)
//     const z = Number(req.params.z)
//     const sum = x + y + z
//     res.send(`Sum is ${sum}`)
// })

app.listen(8080, () => console.log("Server Started"))
app.get("/add/:a/:b/:c/:d", (req, res) => {
    console.log(req.url);
    console.log(req.params);
    res.send("Hello World")
})