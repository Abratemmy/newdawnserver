import mongoose from "mongoose";



const gallerySchema = mongoose.Schema({
    title: String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});


const Gallery = mongoose.model("gallery", gallerySchema);

export default Gallery;