const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Category name is required"],
        unique: true,
        trim: true, // removes extra spaces
        minlength: [3, "Category name must be at least 3 characters"],
        maxlength: [50, "Category name cannot exceed 50 characters"]
    },
    slug: {
        type: String,
        required: [true, "Slug is required"],
        unique: true,
        lowercase: true, // always stored in lowercase
        trim: true,

    },
    hexcode: {
        type: String,
        default: null,
        unique: true,
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Color", colorSchema);
