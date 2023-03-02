// routes/personnage-character.routes.js

const router = require("express").Router();

// List all the character from the API.
router.get('/personnage-character/list', (req, res) => {
  res.send(`Here we'll render the character list`);
});

// Render a form to create a new character.
router.get('/personnage-character/create', (req, res) => {
  res.send(`Here we'll render the form to create a new character`);
});

// Submit info to create a new character.
router.post('/personnage-character/create', (req, res) => {
  res.send(`Here we'll send the form to create a new character`);
});

// Render a form to edit a character.
router.get('/personnage-character/edit/:id', (req, res) => {
  res.send(`Here we'll render the form to update character with ID ${req.params.id}`);
});

// Submit info to edit a character with a matching id.
router.post('/personnage-character/edit/:id', (req, res) => {
  res.send(`Here we'll send the form to update character with ID ${req.params.id}`);
});

// Delete a character with a matching id.
router.get('/personnage-character/delete/:id', (req, res) => {
  res.send(`Here we'll delete character with ID ${req.params.id}`);
});

module.exports = router;
