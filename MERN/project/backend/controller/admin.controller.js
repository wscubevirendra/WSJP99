const adminModel = require('../model/admin.model')
const { noContentResponse, createdResponse, serverErrorResponse, errorResponse, successResponse, deletedResponse, updatedResponse } = require('../utility/response')
var jwt = require('jsonwebtoken');


const admin = {

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const admin = await adminModel.findOne({ email: email });
            if (!admin) return noContentResponse(res, "Admin not found")
            if (password !== admin.password) return errorResponse(res, "Password not match")

            const token = jwt.sign({
                id: admin._id,
                email: admin.email
            }, process.env.TOKEN_SECRET_KEY, { expiresIn: '7d' });
            res.cookie('admin_token', token, {
                maxAge: 7 * 24 * 1000 * 60 * 60, // 7d
                httpOnly: false,         // Not accessible by JS
                secure: false,           // Only sent over HTTPS
                sameSite: 'strict'      // CSRF protection
            });

            return successResponse(res, "Admin login")

        } catch (error) {
            return serverErrorResponse(res, error.errmsg)
        }

    },

}

module.exports = admin