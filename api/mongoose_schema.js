let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ItemSchema = new Schema(
    {
        id: Number,
        img:
            { data: Buffer, contentType: String, id: Number },
        name: String,
        author: String,
        synopsis: String,
        year: Number,
        category: String
    }
);

module.exports = ItemSchema;
