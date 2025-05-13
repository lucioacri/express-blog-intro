const express = require("express");
const router = express.Router();

// INDEX
router.get("/bacheca", (req, res) => {
  res.send("Lista dei post");
});

// SHOW
router.get("/bacheca/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.send("Visualizzaziuone del post " + id);
});

// CREATE
router.post("/bacheca", (req, res) => {
  res.send("Creazione del post");
});

// UPDATE
router.put("/bacheca/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.send("Aggiornamento del post " + id);
});

// DELETE
router.delete("/bacheca/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.send("Cancellazione del post " + id);
});

module.exports = router;
