const express = require('express');
const bodyParser = require('body-parser');
const PORT = require('./config');
// import PORT from './config';

const app = express();
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

app.listen(process.env.PORT || PORT, () => console.log(`Example app listening on port ${PORT}!`));