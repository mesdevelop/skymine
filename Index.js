// index.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 3000;

// Carica le variabili d'ambiente dal file .env
dotenv.config();

// Middleware per il parsing del corpo delle richieste
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint di salute
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

// Endpoint per registrare un nuovo utente
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  // Aggiungi logica per registrare l'utente
  // (ad es. salvare l'utente nel database)
  res.status(201).json({ message: 'User registered successfully', username, email });
});

// Endpoint per avviare il mining
app.post('/start-mining', (req, res) => {
  const { userId, miningConfig } = req.body;
  // Aggiungi logica per avviare il mining
  // (ad es. interagire con il servizio di mining)
  res.status(200).json({ message: 'Mining started successfully', userId, miningConfig });
});

// Endpoint per fermare il mining
app.post('/stop-mining', (req, res) => {
  const { userId } = req.body;
  // Aggiungi logica per fermare il mining
  // (ad es. interagire con il servizio di mining)
  res.status(200).json({ message: 'Mining stopped successfully', userId });
});

// Endpoint per ottenere lo stato del mining
app.get('/mining-status/:userId', (req, res) => {
  const { userId } = req.params;
  // Aggiungi logica per ottenere lo stato del mining
  // (ad es. recuperare dallo stato del servizio di mining)
  res.status(200).json({ userId, status: 'Mining status goes here' });
});

// Gestione degli errori
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Avvia il server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
