const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Server collgato alla port:" + port);
});

app.get("/", (req, res) => {
  res.json("Server del mio blog");
});

app.use(express.static("public"));

app.get("/bacheca", (req, res) => {
  const bacheca = [
    {
      title: "Ciambellone",
      content: "",
      image: "/images/ciambellone.jpeg",
      tags: ["ciambellone"],
    },
    {
      title: "Cracker barbabietola",
      content: "",
      image: "/images/cracker_barbabietola.jpeg",
      tags: ["cracker", "barbabietola"],
    },
    {
      title: "Pane fritto dolce",
      content: "",
      image: "/images/pane_fritto_dolce.jpeg",
      tags: ["pane", "frittura", "dolce"],
    },
    {
      title: "Pasta barbabietola",
      content: "",
      image: "/images/pasta_barbabietola.jpeg",
      tags: ["pasta", "barbabietola"],
    },
    {
      title: "Torta paesana",
      content: "",
      image: "/images/torta_paesana.jpeg",
      tags: ["torta", "paesana"],
    },
  ];
  res.json(bacheca);
});
