const errorHandler = (err, req, res, next) => {
    console.error(err); // Log the error for debugging purposes

    let statusCode = 500;
    let message = 'Internal Server Error';
  
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {    // Check for specific error types and set appropriate status code and message
      statusCode = 400;// Handle JSON parsing error
      message = 'Invalid JSON payload';
    }
  
    res.status(statusCode).json({ error: message });    // Set the status code and send the error response
  };
  
  module.exports = errorHandler;
  