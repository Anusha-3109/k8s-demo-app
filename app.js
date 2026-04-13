require('dotenv').config();

const express = require('express');
const app = express();

const user = process.env.USER_NAME;
const db = process.env.DB_URL;

console.log("User:", user);
console.log("DB URL:", db);

app.get('/', (req, res) => {
  res.send('Hello from Kubernetes App ');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});