const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: mongoose.Types.ObjectId,
  u_name: {
    type: String,
    required: true
  },
  u_umur: {
    type: Number,
    required: true
  },
  u_email: {
    type: String,
    required: true
  },
  u_password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", userSchema);
