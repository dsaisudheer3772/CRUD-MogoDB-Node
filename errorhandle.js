const handleErrors = (err, req, res, next) => {
    if (err) {
      return res.status(500).json({
        status: 'error',
        message: "err.message occured"
      });
    }
  
    return res.status(500).json({
      status: 'error',
      message: "err.message occured"
    });
  }

  module.exports = handleErrors;