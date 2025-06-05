import User from '../models/User';

export async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;

    // Optional: validation and password hashing here

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Registration failed' });
  }
}
