const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.get('/data.ndjson', (req, res) => { 
    res.type('application/x-ndjson');
    res.sendFile(__dirname + '/data.ndjson');
});

app.get('/grid.json', (req, res) => { 
    res.type('application/json');
    res.sendFile(__dirname + '/grid.json');
});


app.listen(3000)