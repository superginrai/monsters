const express = require('express');
const app = express();
const PORT = 5000;
const monsters = require('./modules/monsters');

app.use(express.static('server/public'));

app.get('/monsters', (req, res) => {
    res.send(monsters);
});


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});