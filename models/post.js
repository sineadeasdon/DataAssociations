var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

module.exports = mongoose.model("Post", postSchema);