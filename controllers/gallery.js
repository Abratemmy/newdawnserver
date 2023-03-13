import mongoose from "mongoose";
import Gallery from "../models/gallery.js";


export const getGallery = async (req, res) => {
    try {
        const gallery = await Gallery.find()

        res.status(200).json(gallery)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createGallery = async (req, res) => {
    const gallery = req.body;
    const newgallery = new Gallery(gallery)
    try {
        await newgallery.save();
        res.status(201).json(newgallery);
    } catch (error) {
        req.status(409).json({ message: error.message })
    }

}

export const updateGallery = async (req, res) => {
    const { id: _id } = req.params;
    const gallery = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No gallery with that id');


    const updatedGallery = await Gallery.findByIdAndUpdate(_id, { ...gallery, _id }, { new: true });
    res.json(updatedGallery);

}

export const deleteGallery = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No gallery with that id');

    await Gallery.findByIdAndRemove(id);

    res.json({ message: "gallery deleted successfully" })

}


