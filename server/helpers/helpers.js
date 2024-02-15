exports.buildResponse = (response, statusCode, responseData) =>{
    response.status(statusCode).json(responseData);
}