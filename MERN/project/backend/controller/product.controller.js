const productModel = require('../model/product.model')
const categoryModel = require('../model/category.model')
const brandModel = require('../model/brand.model')
const colorModel = require('../model/color.model')
const { noContentResponse, createdResponse, serverErrorResponse, errorResponse, successResponse, deletedResponse, updatedResponse } = require('../utility/response')
const { createUniqueName } = require('../utility/helper');
const fs = require('fs')


async function saveFile(imageObj) {
    const imageName = createUniqueName(imageObj.name)
    const destination = 'public/images/product/' + imageName
    await imageObj.mv(destination)
    return imageName
}

const product = {
    async create(req, res) {
        try {

            const thumbnail = req.files?.thumbnail
                ? await saveFile(req.files.thumbnail)
                : null;

            // Save multiple images
            const images = req.files?.images
                ? await Promise.all(
                    (Array.isArray(req.files.images)
                        ? req.files.images
                        : [req.files.images]
                    ).map((img) => saveFile(img))
                )
                : [];

            // Create product
            await productModel.create({
                ...req.body,
                colors: req.body.colors ? JSON.parse(req.body.colors) : [],
                thumbnail,
                images,
            });

            return res.status(201).json({ success: true, message: "Product created successfully" });
        } catch (error) {
            console.error(error);
            return serverErrorResponse(res, error.message || "Something went wrong");
        }

    },
    async read(req, res) {
        try {
            const { categorySlug, brandSlug, colorSlug } = req.query;
            console.log("slug check", brandSlug)
            const id = req.params.id
            const filterQuery = {};
            if (categorySlug) {
                const category = await categoryModel.findOne({ slug: categorySlug });
                if (category) {
                    filterQuery.categoryId = category._id;
                }
            }

            if (brandSlug) {
                const brand = await brandModel.findOne({ slug: brandSlug });
                if (brand) {
                    filterQuery.brandId = brand._id;
                }
            }
            if (colorSlug) {
                const color = await colorModel.findOne({ slug: colorSlug });
                if (color) {
                    filterQuery.colors = color._id;
                }
            }
            console.log(filterQuery)
            let product = null;
            if (id) {
                product = await productModel.findById(id)
            } else {
                product = await productModel.find(filterQuery).populate(['colors', 'brandId', 'categoryId'])
            }

            if (!product) errorResponse(res, "product not found")
            return successResponse(res, "Product Found", product)
        } catch (error) {
            return serverErrorResponse(res, error.errmsg)
        }

    },
    async status(req, res) {
        try {
            const { flag } = req.body
            const id = req.params.id;
            const product = await productModel.findById(id);
            if (!product) return noContentResponse(res);
            const updateKey = {};
            if (flag == 1) {
                updateKey.status = !product.status
            } else if (flag == 2) {
                updateKey.stock = !product.stock
            } else if (flag == 3) {
                updateKey.topSelling = !product.topSelling
            }


            await productModel.findByIdAndUpdate(
                id,
                {
                    $set: updateKey
                }
            )

            return updatedResponse(res)

        } catch (error) {
            return serverErrorResponse(res, error.errmsg)
        }

    }
}

module.exports = product