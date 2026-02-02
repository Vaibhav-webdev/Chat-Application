import mongoose from "mongoose";

const thumbnailsSchema = new mongoose.Schema({
  image: { type: String, defalut: "/7.jpg"},
  title: { type: String, default: "How to Earn Money as a Student" },
  aspect: { type: String, default: "16:9" },
  style: { type: String, default: "Bold & Graphic" },
  color: { type: String, default: "Vibrant" },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  },
  thumbnails: [thumbnailsSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.User || mongoose.model("User", userSchema);
