const mongoose = require('mongoose');

const InductionSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, minlength: 1, maxlength: 200 },
  branch: { type: String, required: true, trim: true, minlength: 1, maxlength: 200 },
  year: { type: String, required: true, trim: true, minlength: 1, maxlength: 20 },
  rollNo: { type: String, required: true, trim: true, length: 10 },
  phone: { type: String, required: true, trim: true, minlength: 6, maxlength: 20 },
  email: { type: String, required: true, trim: true, lowercase: true },
}, {
  timestamps: true,
  // prevent storing arbitrary keys
  strict: true,
});

// Basic email and phone validation via schema-level validators
InductionSchema.path('email').validate(function (value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}, 'Invalid email');

InductionSchema.path('phone').validate(function (value) {
  return /^[0-9+\-() ]{6,20}$/.test(value);
}, 'Invalid phone number');

InductionSchema.path('rollNo').validate(function (value) {
  return typeof value === 'string' && value.trim().length === 10;
}, 'Roll number must be exactly 10 characters');

module.exports = mongoose.model('Induction', InductionSchema);
