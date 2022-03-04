import dbConnect from '../../../utils/dbConnect';
import dbContext from '../../../models/dbContext'; 
import jwt from 'jsonwebtoken'
dbConnect();

const handler = async (req, res) => {
  const { method } = req;

  if (method !== 'POST') {
    return res
      .status(400)
      .json({ success: false, message: 'Only POST requests are allowed.' });
  }

  // Get user based on POSTed email
  let user = await dbContext.User.findOne({ email: req.body.email });

  if (!user) {
    user = await dbContext.User.create({
      email: req.body.email,
    });
  }
  let token = jwt.sign(
    {
      user:user,
    },process.env.JWT_SECRET
  );
  user.authLoginToken = token;
  await user.save({ validateBeforeSave: false });
  // Generate the random auth token
  res.json({
    token
  }); 
};

export default handler;
