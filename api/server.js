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

app.listen(port, () => console.log(`Server listening on port ${port}`));
