const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// CREATE
router.post('/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

// READ
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// UPDATE
router.put('/users/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(user);
});

// DELETE
router.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send({ message: 'User deleted' });
});

module.exports = router;
