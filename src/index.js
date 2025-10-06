const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors({
  origin: '*',
}));
app.use(express.json());
app.use(morgan('dev'));

// new Induction model
const Induction = require('./models/induction');

// POST handler that accepts only the allowed fields and creates an Induction document
app.post('/api/applications', async (req, res) => {
  try {
    const { name, branch, year, rollNo, phone, email } = req.body;

    // Basic server-side validation (mirrors client rules)
    const errors = {};
    if (!name || typeof name !== 'string' || name.trim().length < 1 || name.trim().length > 200) {
      errors.name = 'Name must be between 1 and 200 characters';
    }
    if (!rollNo || typeof rollNo !== 'string' || rollNo.trim().length !== 10) {
      errors.rollNo = 'Roll number must be exactly 10 characters';
    }
    if (!branch || typeof branch !== 'string' || branch.trim().length < 1 || branch.trim().length > 200) {
      errors.branch = 'Branch must be between 1 and 200 characters';
    }
    if (!year || typeof year !== 'string' || year.trim().length < 1 || year.trim().length > 20) {
      errors.year = 'Year must be between 1 and 20 characters';
    }
    const phoneRegex = /^[0-9+\-() ]{6,20}$/;
    if (!phone || typeof phone !== 'string' || !phoneRegex.test(phone)) {
      errors.phone = 'Phone number must be 6-20 characters with numbers, +, -, (), or spaces';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ ok: false, errors });
    }

    // create document (only allowed fields)
    const doc = new Induction({
      name: name.trim(),
      branch: branch.trim(),
      year: year.trim(),
      rollNo: rollNo.trim(),
      phone: phone.trim(),
      email: email.trim(),
      // Do NOT store any other properties even if provided
    });

    const saved = await doc.save();
    return res.status(201).json({ ok: true, id: saved._id });
  } catch (err) {
    console.error('Failed to save induction application:', err);
    return res.status(500).json({ ok: false, error: 'Internal server error' });
  }
});

// Basic root route and health-checks
// Accept any method on root so hosting platform HEAD/GET probes succeed.
app.all('/', (req, res) => {
  res.json({ status: 'ok', message: 'FLUX Dbms backend is running' });
});

// Dedicated health endpoint for platform health checks
app.get('/healthz', (req, res) => {
  // Optionally add DB connectivity status here
  const dbState = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.json({ status: 'ok', db: dbState, uptime: process.uptime() });
});

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://aryanacc28_db_user:9JFjKm9v4Ko7Wp1v@cluster0.tfpjavz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Start listening immediately so platform health checks pass even if Mongo isn't ready yet.
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // Attempt to connect to MongoDB (log errors but don't exit; infra can retry/restart)
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
      console.error('Failed to connect to MongoDB', err);
    });
});
