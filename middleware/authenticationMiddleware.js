const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
  // Get token from header
  const token = req.header('Authorization');
    console.log("token:",token.split(' ')[1])
  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'Authorization denied' });
  }

  try {
    // Verify token
    //decoded = jwt.verify(token, "loginSuccessful");

    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    
    
    // Attach user to request object
    req.user = decoded.user;
    next();

  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
