// const mongoose = require('mongoose');

// const applicationSchema = new mongoose.Schema({
//   name: { type: String, required: true, trim: true },
//   branch: { type: String, required: true, trim: true },
//   year: { type: String, required: true, trim: true },
//   phone: { type: String, required: true, trim: true, unique: true },
//   email: { type: String, required: true, trim: true, lowercase: true, unique: true },
//   whyJoin: { type: String, required: true },
//   softSkills: { type: [String], default: [] },
//   hardSkills: { type: [String], default: [] },
// }, { timestamps: true });

// // Ensure unique indexes for quick duplicate checks at the DB level
// applicationSchema.index({ phone: 1 }, { unique: true });
// applicationSchema.index({ email: 1 }, { unique: true });

// module.exports = mongoose.model('Application', applicationSchema);


const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  rollNo: { type: String, required: true, trim: true, unique: true },
  branch: { type: String, required: true, trim: true },
  year: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true, unique: true },
  email: { type: String, required: true, trim: true, lowercase: true, unique: true },
  society: { type: String, required: true, trim: true },
  whyJoin: { type: String, required: true },
  softSkills: { type: [String], default: [] },
  hardSkills: { type: [String], default: [] },
  strengths: { type: [String], default: [] },
  weaknesses: { type: [String], default: [] },
  projectLink: { type: String, trim: true, default: '' },
  imageUrl: { type: String, required: true, trim: true },
  githubProfile: { type: String, trim: true, default: '' },
  residence: { type: String, trim: true, default: '' },
}, { timestamps: true });

// Ensure unique indexes for quick duplicate checks at the DB level
applicationSchema.index({ rollNo: 1 }, { unique: true });
applicationSchema.index({ phone: 1 }, { unique: true });
applicationSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.models.Application || mongoose.model('Application', applicationSchema);


