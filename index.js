const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/forfun', (req, res) => res.json({ok: true}));

app.listen(3000, () => console.log('Example app listening on port 3000!'));