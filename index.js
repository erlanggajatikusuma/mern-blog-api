const express = require('express');

const app = express();

app.use(() => {
    console.log('Hello server...')
    console.log('Hello server 2 ...')
    console.log('Hello server 3 ...')
})

app.listen(4000);