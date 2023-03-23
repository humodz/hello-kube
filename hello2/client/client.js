const express = require('express');
const axios = require('axios');
const app = express();

const serverUrl = process.env.SERVER_URL;

if (!serverUrl) {
    throw new Error('SERVER_URL missing!');
}

app.get('/', async (req, res, next) => {
    const url = req.query.url || serverUrl;
    try {
        const response = await axios.get(url);

        res.json({
            msg: 'hello from client',
            url,
            result: response.data,
        });
    } catch (error) {
        res.json({
            url,
            error: error.message,
        });
    }
});

app.get('/env', async (req, res) => {
    res.json(process.env);
});

app.listen(9090);

console.log('serverUrl = ', serverUrl);
console.log('Client running on http://localhost:9090');