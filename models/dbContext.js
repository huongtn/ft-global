const mongoose = require('mongoose');
const userSchema =   require('./user')(mongoose); 
const purchaseSchema =  require('./purchase')(mongoose); 
const categorySchema =  require('./category')(mongoose);  
const productSchema =  require('./product')(mongoose);  

const User  = mongoose.models.User || mongoose.model('User', userSchema);
const Product =  mongoose.models.Product || mongoose.model('Product', productSchema);
const Category = mongoose.models.Category || mongoose.model('Category', categorySchema); 
const Purchase = mongoose.models.Purchase || mongoose.model('Purchase', purchaseSchema); 
module.exports =  {User,Product,Purchase,Category}; 

//Populate relational fields
// purchaseSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: 'user',
//     select: 'email',
//   });
//   next();
// });

// purchaseSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: 'product',
//     select: 'title',
//   });
//   next();
// });
//const Purchase = mongoose.model('Purchase', purchaseSchema);
// const Product = mongoose.model('Product', productSchema);
//const User = mongoose.model('User', userSchema);
//module.exports = {Product,Purchase};
 
//module.exports = purchaseSchema;

// module.exports =
//   mongoose.models.Product || mongoose.model('Product', productSchema);
  
