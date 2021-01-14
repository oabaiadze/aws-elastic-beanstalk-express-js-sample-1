const express = require('express');
const app = express();
const port = 8181;

app.get('/', (req, res) => res.send('Infrastructure as a code IssS!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
