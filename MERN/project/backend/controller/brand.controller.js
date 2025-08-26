const brandModel = require('../model/brand.model')
const { noContentResponse, createdResponse, serverErrorResponse, errorResponse, successResponse, deletedResponse, updatedResponse } = require('../utility/response')
const { createUniqueName } = require('../utility/helper');
const fs = require('fs')

const brand = {
    async create(req, res) {
        try {
            const brandImg = req.files.image;
            const { name, slug } = req.body
            if (!name || !slug) {
                return noContentResponse(res)
            }
            const existingItem = await brandModel.findOne({ name });
            if (existingItem) {
                return serverErrorResponse(res, "brand already craete")
            }
            const image = createUniqueName(brandImg.name)

            const destination = 'public/images/brand/' + image

            brandImg.mv(
                destination,
                async (error) => {
                    if (error) {
                        return errorResponse(res, "File not upload")
                    } else {
                        const brand = await brandModel.create({ name, slug, image })
                        await brand.save();
                        return createdResponse(res, "brand created successfully");

                    }

                }
            )



        } catch (error) {
            return serverErrorResponse(res, error.errmsg)
        }
    },
    async read(req, res) {
        try {
            const id = req.params.id
            let brand = null;
            if (id) {
                brand = await brandModel.findById(id)
            } else {
                brand = await brandModel.find()
            }

            if (!brand) errorResponse(res, "brand not found")
            return successResponse(res, "brand Found", brand)
        } catch (error) {
            return serverErrorResponse(res, error.errmsg)
        }

    },
    async deleteByID(req, res) {
        try {
            const id = req.params.id;
            const existingItem = await brandModel.findById(id);

            fs.unlinkSync(`./public/images/brand/${existingItem.image}`)

            await brandModel.findByIdAndDelete(id)
            return deletedResponse(res)

        } catch (error) {
            console.log(error)
            return serverErrorResponse(res, error.errmsg)
        }
    }

}

module.exports = brand