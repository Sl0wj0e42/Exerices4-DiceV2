let port = 8080;
let express = require('express');
let app = express();
let path = require('path');

app.get('/', (req, res) => {
    diceNumber = Math.floor(Math.random() * 6) + 1;

    res.send('Dice Number is: ' + diceNumber.toString());
});

app.listen(port, () => {
    console.log('Running on port: ' + port);
});