// This is a simple Express server that simulates an I/O operation with a delay.
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/data', (req, res) => {
  setTimeout(() => {
    res.json({ success: true, timestamp: Date.now() });
  }, 500); // Simulate I/O delay
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
