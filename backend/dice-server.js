let port = 8080;
let express = require('express');
let app = express();
let path = require('path');

app.get('/', (req, res) => {
    diceNumber = Math.floor(Math.random() * 6) + 1;

    res.send('Dice Number is: ' + diceNumber.toString());
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/dicepages', (req, res) => {
    let diceRoll = Math.floor(Math.random() * 6) + 1;

    let diceNumber = diceRoll.toString();

    //<post verible name> = {<.ejs Side>: <server side>}
    let sendDice = {"numberResponse" : diceNumber};

    //res.render(<.ejs page name>, <post verible name>)
    res.render("dicepages", sendDice);
});

//Added for testing
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/page", function(request, response) {
    let diceRoll = Math.floor(Math.random() * 6) + 1;

    let diceNumber = diceRoll.toString();
    let pageData = {"msg": diceNumber};
    response.render("page", pageData);
});

app.listen(port, () => {
    console.log('Running on port: ' + port);
});