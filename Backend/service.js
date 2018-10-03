var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');



var app = express();
app.use( bodyParser.json() );
/// middleware // body parser json



var postSchema = mongoose.Schema ({
    title: String,
    description: String
});

var Post = mongoose.model('Post', postSchema);

mongoose.connect('mongodb://localhost/mongoose_basics', function (err) {
    if (err) throw err;
    console.log('Successfully connected');
});

app.post('/api/posts', function (req, res){
    var postOne = new Post({
        title: req.body.title,
        description: req.body.description
    });
    postOne.save(function (err, post){
        if (err) throw err;
        console.log('Successfully save');
        res.json(post);
    });
    console.log(req.body);
});

app.get('/api/posts', function (req, res) {
    Post.find({}, function (err, post) {
        if (err) throw err;
        console.log('Successfully get all objects from db');
        res.json(post);
    });
});

app.get('/api/posts/:id', function (req, res) {
    Post.findById(req.params.id, function (err, result){
        if (err) throw err;
        console.log('Successfully find by id');
        res.json(result);
    });
});

app.delete('/api/posts/:id', function (req, res) {
   Post.findByIdAndRemove(req.params.id, function (err, result){
       if (err) throw err;
       console.log('Successfully remove');
       res.json(result);
   });
});

app.put('/api/posts/:id', function (req, res){
    Post.findByIdAndUpdate(req.body.id, {title: req.body.title, description: req.body.description}, function (err, result){
        if (err) throw err;
        console.log('Successfully update');
        res.json(result);
    })
});


app.listen(3005, function() {
    console.log("Server listening on port 3005");
});