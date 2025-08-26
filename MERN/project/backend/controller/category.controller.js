const categoryModel = require('../model/category.model')
const { noContentResponse, createdResponse, serverErrorResponse, errorResponse, successResponse, deletedResponse, updatedResponse } = require('../utility/response')
const { createUniqueName } = require('../utility/helper');
const fs = require('fs')

const category = {
    async create(req, res) {
        try {
            const categoryImg = req.files.image;
            const { name, slug } = req.body
            if (!name || !slug) {
                return noContentResponse(res)
            }
            const existingItem = await categoryModel.findOne({ name });
            if (existingItem) {
                return serverErrorResponse(res, "Category already craete")
            }
            const image = createUniqueName(categoryImg.name)

            const destination = 'public/images/category/' + image

            categoryImg.mv(
                destination,
                async (error) => {
                    if (error) {
                        return errorResponse(res, "File not upload")
                    } else {
                        const category = await categoryModel.create({ name, slug, image })
                        await category.save();
                        return createdResponse(res, "Category created successfully");

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
            let category = null;
            if (id) {
                category = await categoryModel.findById(id)
            } else {
                category = await categoryModel.find()
            }

            if (!category) errorResponse(res, "Category not found")
            return successResponse(res, "Category Found", category)
        } catch (error) {
            return serverErrorResponse(res, error.errmsg)
        }

    },
    async deleteByID(req, res) {
        try {
            const id = req.params.id;
            const existingCat = await categoryModel.findById(id);

            fs.unlinkSync(`./public/images/category/${existingCat.image}`)

            await categoryModel.findByIdAndDelete(id)
            return deletedResponse(res)

        } catch (error) {
            console.log(error)
            return serverErrorResponse(res, error.errmsg)
        }
    },
    async status(req, res) {
        try {
            const id = req.params.id;
            const category = await categoryModel.findById(id);
            await categoryModel.findByIdAndUpdate(
                id,
                { $set: { status: !category.status } }
            )
            return updatedResponse(res, "Status Update")

        } catch (error) {
            return serverErrorResponse(res, error.errmsg)
        }
    },
    async update(req, res) {
        try {
            const id = req.params.id
            const categoryImg = req.files.image ?? null
            console.log(categoryImg, "check")
            console.log(req.body)
            const { name, slug } = req.body
            const existingItem = await categoryModel.findById(id);
            console.log(existingItem)

            if (!existingItem) {
                return serverErrorResponse(res, "Category not found")
            }

            const update = {};
            if (name) update.name = name;
            if (slug) update.slug = slug;

            if (categoryImg) {
                const image = createUniqueName(categoryImg.name)
                const destination = 'public/images/category/' + image;
                categoryImg.mv(
                    destination,
                    async (error) => {
                        if (error) {
                            return errorResponse(res, "File not upload")
                        } else {
                            fs.unlinkSync(`./public/images/category/${existingItem.image}`)
                            console.log(update)
                            update.image = image
                            await categoryModel.findByIdAndUpdate(
                                id,
                                { $set: update }
                            )

                            return updatedResponse(res, "Category update successfully");

                        }

                    }
                )

            }






        } catch (error) {
            console.log(error)
            return serverErrorResponse(res, error.errmsg)
        }
    },

}

module.exports = category