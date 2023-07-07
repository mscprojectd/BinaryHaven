const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

// Load SSL certificate and private key
const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem')
};

// Create an HTTPS server
https.createServer(options, app).listen(3000, () => {
  console.log('Server is running on port 3000');
});
