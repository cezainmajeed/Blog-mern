import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  useremail: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: false
  },
  createDate: {
    type: Date
  }
});

const Post = new mongoose.model("Post",postSchema);

export default Post;
