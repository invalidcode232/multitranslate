// Debug server to test the translation API without CORS issues

const express = require('express');
// const cors = require('cors');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// app.use(cors());
app.use(express.static(path.join(__dirname, '../../build')));

const axios = require('axios').default;

app.get('/translate', (req, res) => {
    const text = req.query.text;
    const language = req.query.language;

    axios.get(encodeURI(`https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=auto&tl=${language}&q=${text}`))
    .then((result) => {
        res.send(result['data']);
    })
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build/', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});