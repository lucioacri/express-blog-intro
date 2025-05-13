const express = require("express");
const router = express.Router();

// INDEX
router.get("/", (req, res) => {
  res.send("Lista dei post");
});

// SHOW
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.send("Visualizzaziuone del post " + id);
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
