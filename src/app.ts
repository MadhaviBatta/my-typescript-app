import express from "express";
import path from "path";
const message: string = "Hello from Codespaces!s";
console.log(message);



const app = express();

/*app.get("/", (req, res) => {
  res.send("Server is working 🚀");
});*/


app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});