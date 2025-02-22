import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
    userId: { type: String, required: true },  // Store anonymous user ID
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    category: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  });

export default mongoose.model("Transaction", TransactionSchema);

  