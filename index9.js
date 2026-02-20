import express from 'express'
const app = express()
app.listen(8080)

const logger = (req,res,next) => {
    req.message = " This is Logger function. ";
    // console.log(req.url);
    next()
}
// app.use(logger)

app.get("/",logger,(req,res)=>{
    // app.use(logger) //undefined
    // res.end()
    // res.send("Hello World");
    // res.json({name:"John",age:21});
    res.json(req.url);
    console.log(req.message);
});

app.get("/home",(req,res)=>{
    res.json(req.url);
    console.log(req.message);
});