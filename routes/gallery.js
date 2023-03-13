import express from "express";
import { getGallery, createGallery, updateGallery, deleteGallery } from "../controllers/gallery.js";

const router = express.Router();

router.get('/', getGallery);
router.post('/', createGallery);
router.patch('/:id', updateGallery);
router.delete('/:id', deleteGallery);

export default router;