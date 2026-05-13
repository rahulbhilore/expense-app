const sendSuccess = (res, statusCode = 200, message = "Success", data = null) => {
  const response = res.status(statusCode).json({
    success: true,
    message,
    data,
  });
  return response;
};

const sendError = (res, statusCode = 500, message="False")=>{
  const response = res.status(statusCode).json({
    success: false,
    message,
  });
  return response;
};

export { sendSuccess, sendError };
