const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Aggiungi le tue altre rotte e middleware qui

// Endpoint di salute
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

// Avvia il server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
