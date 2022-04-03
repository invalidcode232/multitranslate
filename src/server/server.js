// Debug server to test the translation API without CORS issues

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const axios = require('axios').default;

app.get('/translate', (req, res) => {
    const text = req.query.text;
    const language = req.query.language;

    axios.get(encodeURI(`https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=auto&tl=${language}&q=${text}`))
    .then((result) => {
        res.send(result['data']);
    })
});

app.listen(8000, () => {
    console.log('Server running on port 8000');
});