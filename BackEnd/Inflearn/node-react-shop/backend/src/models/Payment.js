import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId
  },
  data: {
    type: Array,
    default: []
  },
  product: {
    type: Array,
    default: []
  }
}, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;
