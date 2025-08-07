// server.js
import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.OPENWEATHER_API_KEY;

    if (!city || !apiKey) {
        return res.status(400).json({ error: 'Missing city or API key' });
    }

    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            res.json(data);
        } else {
            res.status(response.status).json({ error: data.message });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
