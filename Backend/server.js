// server.js (Backend)
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS for EC2 frontend
app.use(cors());

// Set up database connection (MySQL in this example)
const db = mysql.createConnection({
  host: 'database-uts.cnoykmsicbt7.ap-southeast-1.rds.amazonaws.com', // Ganti dengan host database kamu
  user: 'admin', // Ganti dengan username database
  password: 'adminuts123', // Ganti dengan password database
  database: 'uts_cloud' // Ganti dengan nama database
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

// Endpoint untuk mengambil data dari database
app.get('/data', (req, res) => {
  const query = 'SELECT * FROM produk'; // Ganti dengan query yang sesuai
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});