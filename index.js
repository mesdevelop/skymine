const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Endpoint di controllo della salute
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

app.get('/', (req, res) => {
  res.send('Welcome to the Cloud Mining SaaS!');
});

// Esempio di endpoint per lo stato del mining
app.get('/mining-status', async (req, res) => {
  try {
    const response = await axios.get('https://api.nicehash.com/api/v2/mining/stats', {
      params: {
        api_key: process.env.MINING_API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching mining status');
  }
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});


app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
