import mongoose from "mongoose";
import Inc from "mongoose-sequence";

const AutoIncrement = Inc(mongoose);

const blogSchema = mongoose.Schema({
    title: String,
    image: String,
    content: String,
    excerpt: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});


blogSchema.plugin(AutoIncrement, { inc_field: 'id' });
const Blog = mongoose.model("blog", blogSchema);

export default Blog;