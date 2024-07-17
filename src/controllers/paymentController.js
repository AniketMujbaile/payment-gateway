const Payment = require('../models/Payment');
const Refund = require('../models/Refund');

// Create Payment
exports.createPayment = async (req, res) => {
  try {
    const { userId, amount, currency, method } = req.body;
    const newPayment = new Payment({ userId, amount, currency, method });
    await newPayment.save();
    res.status(201).json(newPayment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Process Payment
exports.processPayment = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) return res.status(404).json({ message: 'Payment not found' });

    payment.status = 'completed';
    payment.updatedAt = Date.now();
    await payment.save();
    res.json(payment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Retrieve Payment Status
exports.getPaymentStatus = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) return res.status(404).json({ message: 'Payment not found' });

    res.json(payment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Handle Refund
exports.handleRefund = async (req, res) => {
  try {
    const { amount } = req.body;
    const payment = await Payment.findById(req.params.id);
    if (!payment) return res.status(404).json({ message: 'Payment not found' });

    const refund = new Refund({ paymentId: payment._id, amount });
    await refund.save();
    res.status(201).json(refund);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
