const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = 3003;
app.use(express.json());
app.use(cors());

app.use('/', routes);

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Listening on port ${port}`);
});
