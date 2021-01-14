const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Infrastructure as a code IssS! hanges made By me its inmteresting'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
