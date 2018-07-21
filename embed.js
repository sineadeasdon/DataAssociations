var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

var newUser = new User ({
    name: "Hermione Granger",
    email: "hermione@hogwarts.edu"
});

newUser.posts.push({
    title: "How to brew polyjuice potion",
    content: "Just kidding. Go to potions class!"
});

newUser.save(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});

// var newPost = new Post ({
//     title: "How to brew polyjuice potion",
//     content: "Just kidding. Go to potions class!"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// })
