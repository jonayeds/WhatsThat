
const apiError = (err, req,res, next)=>{
    err.message ||= "Internal server Error"
    err.statusCode ||= 500

    return res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}

const asyncHandler=  (fn)=> async(req,  res, next)=>{
    try {
        await fn(req,res, next)
    } catch (error) {
        next(error)
    }
}

export {apiError,asyncHandler}