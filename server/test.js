const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('WORKS'));
app.listen(3000, () => console.log('EMERGENCY SERVER RUNNING'));