const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Server collgato alla port:" + port);
});

app.get("/", (req, res) => {
  res.json("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  const bacheca = [
    { title: "Ciambellone" },
    { title: "Cracker barbabietola" },
    { title: "Pane fritto dolce" },
    { title: "Pasta barbabietola" },
    { title: "Torta paesana" },
  ];
  res.json(bacheca);
});
