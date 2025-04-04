require('dotenv').config(); 

const express = require('express');
const app = express();

const accessKey = process.env.UNSPLASH_ACCESS_KEY;
const secretKey = process.env.UNSPLASH_SECRET_KEY;
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send(`Your Access Key is ${accessKey}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});