const express = require('express');
const { greet }  = require('../utils/utils');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(greet('some request name'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
  console.log(greet('some name'));
});
