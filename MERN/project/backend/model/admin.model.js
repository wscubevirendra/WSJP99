const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please provide a valid email"],
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        role: {
            type: String,
            enum: ["superadmin", "admin", "manager"],
            default: "admin",
        },
        status: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

const adminModel = mongoose.model("Admin", adminSchema);
module.exports = adminModel
