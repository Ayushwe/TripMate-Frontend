import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000; // or any port you prefer

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API configuration
const config = {
  cUrl: 'https://api.countrystatecity.in/v1/countries',
  ckey: 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=='
};

// Routes

// Get countries
app.get('/api/countries', async (req, res) => {
  try {
    const response = await axios.get(config.cUrl, {
      headers: { 'X-CSCAPI-KEY': config.ckey }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching countries:', error);
    res.status(500).json({ error: 'Error fetching countries' });
  }
});

// Get states by country code
app.get('/api/states/:countryCode', async (req, res) => {
  const { countryCode } = req.params;
  try {
    const response = await axios.get(`${config.cUrl}/${countryCode}/states`, {
      headers: { 'X-CSCAPI-KEY': config.ckey }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching states:', error);
    res.status(500).json({ error: 'Error fetching states' });
  }
});

// Get cities by country code and state code
app.get('/api/cities/:countryCode/:stateCode', async (req, res) => {
  const { countryCode, stateCode } = req.params;
  try {
    const response = await axios.get(`${config.cUrl}/${countryCode}/states/${stateCode}/cities`, {
      headers: { 'X-CSCAPI-KEY': config.ckey }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching cities:', error);
    res.status(500).json({ error: 'Error fetching cities' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});