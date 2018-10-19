import mongoose from 'mongoose';

const todoSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    description: {
      type: String,
      required: false,
      default: '',
    },
    done: Boolean,
  },
  { timestamps: {} },
);

export default mongoose.model('Todo', todoSchema);
