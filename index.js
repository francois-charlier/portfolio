const express = require('express');
var path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, '/public')));


app.get('/', (req, res) => {
    res.sendFile('/src/pages/index.html', { root: __dirname })
})

app.listen(3000, () => {
    console.log("starting...");
    console.log("Connected")
});