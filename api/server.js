const express = require('express');
let mongoose = require('mongoose');

const app = express();
const port = 3000;
let ItemSchema = require('./mongoose_schema');

let Item = mongoose.model('Books', ItemSchema);

mongoose.connect('mongodb://127.0.0.1:27017');

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/books/:category', (req, res) => {
    Item.find({ category: req.params.category }, function (err, books) {
        return res.send(books);
    });
});

app.get('/api/covers/:id', function (req, res, next) {

    Item.findOne({id: req.params.id}, function (err, item) {

        if (err) return next(err);

        res.contentType(item.img.contentType);

        res.send(item.img.data);

    });

});

app.listen(port, () => console.log(`Server listening on port ${port}`));
