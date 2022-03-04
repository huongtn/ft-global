module.exports =(mongoose) =>
{
  var categorySchema  = new mongoose.Schema(
    { 
      name: {
        type: String,
        required: [true, 'Name is required'],
      },
      code: {
        type: String,
        required: [true, 'Code is required'],
      }, 
    },
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
  );
  return categorySchema;
} 
