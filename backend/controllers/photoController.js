import Photo from "../models/photoModel.js";

const createPhoto = async (req, res) => {
    try {
        const photo = await Photo.create(req.body)
        res.status(201).json({
            message: "basarılı",
            photo
        })
    } catch (error) {
        res.status(500).json({
            message: "basarısız",
            error
        })
    }
}

const getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.find({})
        res.status(200).json({
            message: "basarılı",
            photos
        })
    } catch (error) {
        res.status(500).json({
            message: "basarısız",
            error
        })
    }
}

export { createPhoto,getAllPhotos}