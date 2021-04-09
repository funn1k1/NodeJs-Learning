const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.end('Hello from node.js');
})

app.listen(3000, () => {
    console.log('Server has started on port 3000....');
})