//const mongoose = require('mongoose');
module.exports =(mongoose) =>
{
  var productSchema  = new mongoose.Schema(
    {
      category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Category is required'],
      },
      title: {
        type: String,
        required: [true, 'Title is required'],
      },
      amount: {
        type: Number,
        required: [true, 'Amount is required'],
      },
      stripeId: {
        type: String,
        required: [true, 'Stripe ID is required'],
      },
    },
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
  );
  return productSchema;
} 

// module.exports =
//   mongoose.models.Product || mongoose.model('Product', productSchema);
