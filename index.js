const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Cloud Mining SaaS!');
});

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
