const express = require("express");
const router = express.Router();
const { posts } = require("../data.js");

// INDEX
router.get("/", (req, res) => {
  res.send({
    Description: "Lista dei post",
    Object: posts,
  });
});

// SHOW
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.send({
    Description: "Visualizzaziuone del post " + id,
    Object: posts.find((post) => post.id === id),
  });
});

// CREATE
router.post("/", (req, res) => {
  res.send("Creazione del post");
});

// UPDATE
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.send("Aggiornamento del post " + id);
});

// DELETE
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.send("Cancellazione del post " + id);
});

module.exports = router;
