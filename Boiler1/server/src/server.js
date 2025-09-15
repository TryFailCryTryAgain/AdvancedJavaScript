const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(cors());

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, '../../client')));

app.get('/', (req, res) => {
    // Redirect to the index.html that is stored in the client/index.html
    res.sendFile(path.join(__dirname, '../../client', 'index.html'));
});


app.get('/signup', (req, res) => {
    const { influencer, source } = req.query;
    res.redirect(`/?influencer=${influencer}&source=${source}`);
})
