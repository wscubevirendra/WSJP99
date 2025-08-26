
function errorResponse(res, code = 500, message = "Internal server error") {
    const data = {
        message: message,
        flag: 0,
    }
    return res.status(code).json(data)
}

module.exports = errorResponse