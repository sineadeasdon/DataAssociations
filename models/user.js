var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});

module.exports = mongoose.model("User", userSchema);
