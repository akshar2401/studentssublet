import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  commentText: {
    type: String,
    trim: true,
  },
  projectID: {
    type: String,
  },
}, { timestamps: true });


let Comment;
try {
  Comment = mongoose.model("Comment");
} catch (error) {
  Comment = mongoose.model("Comment", commentSchema);
}

module.exports = Comment;