const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET all users
router.get('/', async (req, res) => {
  try {
    const allUsers = await pool.query('SELECT * FROM users');
    res.json(allUsers.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET user by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (user.rows.length === 0) return res.status(404).json({ error: "User not found" });
    res.json(user.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CREATE user
router.post('/', async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const newUser = await pool.query(
      'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *',
      [name, email, age]
    );
    res.status(201).json(newUser.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE user
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    const updateUser = await pool.query(
      'UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *',
      [name, email, age, id]
    );
    if (updateUser.rows.length === 0) return res.status(404).json({ error: "User not found" });
    res.json(updateUser.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE user
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    if (deletedUser.rows.length === 0) return res.status(404).json({ error: "User not found" });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
