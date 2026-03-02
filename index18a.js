// accept two numbers through command line argument and print the sum 
import express from "express";
const app = express();

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);
const PORT = process.argv[4];
const sum = num1 + num2;

app.listen(PORT, () => {
  console.log(`Server Started Successfully on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`Sum is ${sum}`);
});