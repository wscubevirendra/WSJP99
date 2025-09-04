const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            maxLength: 50,
            unique: true
        },
        slug: {
            type: String,
            maxLength: 60,
            unique: true

        },
        shortDescription: {
            type: String,
            maxLength: 200,

        },
        longDescription: {
            type: String,
        },
        originalPrice: {
            type: Number,
            default:300
        },
        discountPercentage: {
            type: Number,
            default: 2
        },
        finalPrice: {
            type: Number,
        },
        categoryId: {
            type: mongoose.Schema.ObjectId,
            ref: "Category"
        },
        brandId: {
            type: mongoose.Schema.ObjectId,
            ref: "Brand"
        },
        colors: [
            {
                type: mongoose.Schema.ObjectId,
                ref: "Color"
            }
        ],
        thumbnail: {
            type: String,
            default: null
        },
        images: [
            {
                type: String,
            }
        ],
        stock: {
            type: Boolean,
            default: true
        },
        topSelling: {
            type: Boolean,
            default: false
        },
        status: {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true
    }
)

const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel