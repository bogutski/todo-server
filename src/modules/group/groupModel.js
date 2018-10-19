import mongoose from 'mongoose';

const groupSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    description: {
      type: String,
      required: false,
      default: '',
    },
  },
  { timestamps: {} },
);

export default mongoose.model('Group', groupSchema);
