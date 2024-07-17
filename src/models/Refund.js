const mongoose = require('mongoose');

const RefundSchema = new mongoose.Schema({
  paymentId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Payment', 
    required: true 
  },
  amount: { 
    type: Number, 
    required: true 
  },
  status: { 
    type: String, 
    default: 'pending' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  },
});

module.exports = mongoose.model('Refund', RefundSchema);
