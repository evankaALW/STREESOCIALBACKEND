const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
  // Get token from header
  const token = req.header('Authorization');
    console.log("token:",token)
  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'Authorization denied' });
  }

  try {
    // Verify token
    //decoded = jwt.verify(token, "loginSuccessful");.split(' ')[1]
    console.log("token:",token)
    console.log(token == process.env.JWT_SECRET)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach user to request object
    req.user = decoded.user;
    next();

  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
