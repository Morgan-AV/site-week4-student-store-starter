const express = require('express');
const app = express();

const port = 3000;

//Is this index.js = server.js

app.get('/', (req,res) => {
    res.send('Hello World!! whaaaaaat🚀')
});



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port} `);
});