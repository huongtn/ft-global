const crypto = require('crypto');
const validator = require('validator');
module.exports = (mongoose) => {
  const purchaseSchema = new mongoose.Schema(
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'Product is required'],
      },
      amount: {
        type: Number,
        required: [true, 'Amount is required'],
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    },
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
  );
  return purchaseSchema;
} 
