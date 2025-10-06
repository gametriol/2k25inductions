const mongoose = require('mongoose');

const InductionSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, minlength: 1, maxlength: 200 },
  branch: { type: String, required: true, trim: true, minlength: 1, maxlength: 200 },
  year: { type: String, required: true, trim: true, minlength: 1, maxlength: 20 },
  rollNo: { type: String, required: true, trim: true, unique: true, index: true },
  phone: { type: String, required: true, trim: true, unique: true, index: true },
  email: { type: String, required: true, trim: true, lowercase: true, unique: true, index: true },
}, {
  timestamps: true,
  strict: true, // prevent storing arbitrary keys
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

// Ensure DB-level unique indexes
InductionSchema.index({ rollNo: 1 }, { unique: true });
InductionSchema.index({ phone: 1 }, { unique: true });
InductionSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.models.Induction || mongoose.model('Induction', InductionSchema);
