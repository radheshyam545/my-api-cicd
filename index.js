import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.get('/radhe',(req,res)=>{
  res.json({message:"hurrey chal gya re"})
})

app.post('/radhe',(req,res)=>{
  res.json({message:"hurrey chal gya re"})
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
