
// Backend Express server that fetches photos from the Unsplash API

// allows cross origin requests for frontend vs backend servers
import cors from 'cors';

// allows access to API keys in .env
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
app.use(cors());

const accessKey = process.env.UNSPLASH_ACCESS_KEY;
const secretKey = process.env.UNSPLASH_SECRET_KEY;

const port = process.env.PORT || 3001;

app.get('/api/photos', async (req, res) => {
    try {
        const page = req.query.page || 1;
        const query = req.query.query || '';

        let unsplashUrl;
        if (query) {
            unsplashUrl = `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=${page}&query=${query}`;
        } else {
            unsplashUrl = `https://api.unsplash.com/photos?client_id=${accessKey}&page=${page}`;
        }

        const response = await fetch(unsplashUrl);
        const data = await response.json();

        const results = query ? data.results : data;
        return res.json(results);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error fetching photos' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});