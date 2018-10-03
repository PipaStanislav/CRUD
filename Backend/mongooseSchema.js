var mongoose = require('mongoose');

var postSchema = mongoose.Schema ({
    title: String,
    description: String
});

var Post = mongoose.model('Post', postSchema);

var postOne = new Post({
    title: 'Hello',
    description: 'World cool'
});
var id = '5afd2b5951300b6137311d42';


mongoose.connect('mongodb://localhost/mongoose_basics', function (err) {
    if (err) throw err;
    console.log('Successfully connected');

    // postOne.save( function (err){
    //     if (err) throw err;
    //     console.log('Successfully save');
    // });
    //
    // Post.find({}, function (err, result){
    //     if (err) throw err;
    //     console.log('Successfully find', result);
    // });
    //
    // Post.findById(id, function (err, result){
    //     if (err) throw err;
    //     console.log('Successfully find by id', result)
    // });

    // Post.findByIdAndRemove(id, function (err, result){
    //     if (err) throw err;
    //     console.log('Successfully remove', result);
    // });

    Post.findByIdAndUpdate(id, {title: 'Cool', description: 'adsda'}, function (err, result){
        if (err) throw err;
        console.log('Successfully update', result)
    })
});
