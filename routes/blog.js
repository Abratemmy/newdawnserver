import express from "express";
import { getBlog, getBlogs, createBlog, updateBlog, deleteBlog } from "../controllers/blog.js";

const router = express.Router();

router.get('/:title', getBlog);

router.get('/', getBlogs);
router.post('/', createBlog);
router.patch('/:id', updateBlog);
router.delete('/:id', deleteBlog);

export default router;