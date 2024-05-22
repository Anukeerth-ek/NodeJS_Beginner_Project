const {constants} = require('../constants')
const errorHandler = (err, req, res, next)=> {
    const statusCode = res.statusCode ? res.statusCode : 500
    switch(statusCode) {
        case constants.VALIDATION_ERROR:  
        res.json({title: "Not found", message: err.message, stackTrace:err.stack})
        break;

        case constants.UNAUTHORIZED: 
        res.json({title: "unAuthorisation failed", message: err.message, stackTrace:err.stack})
        break;
        case constants.FORBIDDEN: 
        res.json({title: "forbidden error", message: err.message, stackTrace:err.stack})
        break;
        case constants.NOT_FOUND: 
        res.json({title: "not found", message: err.message, stackTrace:err.stack})
        break;
        case constants.SERVER_ERROR: 
        res.json({title: "Server not found", message: err.message, stackTrace:err.stack})
        break;

        default :
        console.log("NO Erros, All good")
    }
   
    
}

module.exports = errorHandler