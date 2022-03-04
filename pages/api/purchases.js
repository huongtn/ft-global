import dbConnect from '../../utils/dbConnect'
import dbContext from '../../models/dbContext'
dbConnect();

const handler = async (req, res) => {
  const { method } = req;
  const { id } = req.query;
  switch (method) {
    case "POST":
      await dbContext.Purchase.create(req.body);
      return res.status(200).json({
        success: true,
        message: 'Saving successful!',
      });
    case "GET":
      if (!id) {
        const purchases = await dbContext.Purchase.find({}).populate('product').populate('user');
        return res
          .status(200)
          .json(purchases);
      }
      else {
        const purchase = await dbContext.Purchase.findById(id).populate('product').populate('user');
        return res
          .status(200)
          .json(purchase);
      }
    case "DELETE":
      await dbContext.Purchase.deleteOne({ _id: id });
      return res.status(200).json({
        success: true,
        message: 'Delete successful!',
      });

    default:
      return res
        .status(400)
        .json({ success: false, message: 'Only POST requests are allowed.' });
  }
};
export default handler;
//export default withProtect(withRoles(handler, 'admin'));
