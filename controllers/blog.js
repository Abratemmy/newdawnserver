import mongoose from "mongoose";
import Blog from "../models/blog.js";



export const getBlog = async (req, res) => {
    let { title } = req.params;
    const slug = title.split("-").join(" ")
    try {
        const blog = await Blog.findOne({ title: slug });
        console.log("get a single blog", blog)
        res.status(200).json(blog)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}



export const getBlogs = async (req, res) => {
    try {
        const blog = await Blog.find();
        res.status(200).json(blog)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createBlog = async (req, res) => {
    const blog = req.body;
    const newBlog = new Blog(blog)
    try {
        await newBlog.save();
        console.log(newBlog)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateBlog = async (req, res) => {
    const { id: _id } = req.params;
    const blog = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No blog with that id');


    const updatedBlog = await Blog.findByIdAndUpdate(_id, { ...blog, _id }, { new: true });
    res.json(updatedBlog);

}

export const deleteBlog = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No blog with that id');

    await Blog.findByIdAndRemove(id);

    res.json({ message: "blog deleted successfully" })

}
