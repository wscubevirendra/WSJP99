const userModel = require("../model/user.model");
const errorResponse = require("../response");

const userController = {
    async create(req, res) {
        try {
            const user = await userModel.create({
                name: req.body.name,
                email: req.body.email,
                contact: req.body.contact
            });

            user.save()

            res.status(201).json({ message: "User create", flag: 1 })


        } catch (error) {
            errorResponse(res)
        }
    },
    async get(req, res) {
        try {
            const users = await userModel.find();
            if (users) {
                res.status(200).json({ message: "User find", flag: 1, users })
            }


        } catch (error) {
            errorResponse(res)


        }
    },
    async userDelete(req, res) {
        try {
            const id = req.params.id;
            await userModel.findByIdAndDelete(id)
            res.status(200).json({ message: "User accound delete", flag: 1 })

        } catch (error) {
            errorResponse(res)

        }
    },
    async userStatus(req, res) {
        try {
            const id = req.params.id;
            const user = await userModel.findOne({ _id: id });
            if (user) {
                await userModel.updateOne(
                    { _id: id },
                    {
                        $set: {
                            status: !user.status
                        }
                    }
                )

                res.status(200).json({ message: "User status update", flag: 1 })
            }



        } catch (error) {
            errorResponse(res)

        }
    }
}

module.exports = userController