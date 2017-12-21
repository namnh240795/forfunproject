const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = require('./config');
const data = require('./data.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { body } = req;
    if(body.username !== 'admin')
        return res.json({ error: 'User not found'});
    else {
        if(body.password == '1234567890' ) {
            return res.json({ token: 'kasjdfkljaslkdjflkasjdflkj' });
        } else return res.json({ error: 'Wrong password' });
    }
});

app.get('/home', (req, res) => {
    let { limit, offset, token } = req.query;
    if(token !== 'kasjdfkljaslkdjflkasjdflkj'){
        return res.json({ error: 'Invalid token'});
    }
    if(limit && offset) {
        const result = data.slice(offset, limit);
        return res.json( result );
    } else return res.json(data.slice(0, 5));
});

app.listen(process.env.PORT || PORT, () => console.log(`Example app listening on port ${PORT}!`));