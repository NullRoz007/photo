const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('web'));

app.listen(port, () => {
    console.log("martin-photography-frontend running on port: " + port);
});

