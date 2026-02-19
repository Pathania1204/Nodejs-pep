import express from 'express'
const app = express()
// app.listen(8080, () => console.log("Server Started"))
// app.get("/add/:a/:b", (req, res) => {
//     const a = Number(req.params.a)
//     const b = Number(req.params.b)
//     const sum = a + b
//     res.send(`Sum is ${sum}`)
// })

app.listen(8080, () => console.log("Server Started"))
app.get("/add/a/:a/b/:b/c/:c", (req, res) => {
    const a = Number(req.params.a)
    const b = Number(req.params.b)
    const c = Number(req.params.c)
    const sum = a + b + c
    res.send(`Sum is ${sum}`)
})