let fs = require('fs');
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ItemSchema = new Schema(
    {
        img:
            { data: Buffer, contentType: String },
        name: String,
        author: String,
        year: Number
    }
);
let Item = mongoose.model('Books',ItemSchema);

mongoose.connect('mongodb://127.0.0.1:27017').then(() => {
    fs.readdirSync('./data/img').forEach(file => {
        if (/.jpg/.test(file)) {
            console.log(file);
            let newItem = new Item();
            newItem.img.data = fs.readFileSync('./data/img/' + file);
            newItem.img.contentType = 'image/jpg';
            newItem.name = 'A book';
            newItem.author = 'Paul Sheldon';
            newItem.year = 2018;
            newItem.save();
        }
    });
});


