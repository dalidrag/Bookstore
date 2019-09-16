let fs = require('fs');
let mongoose = require('mongoose');
let ItemSchema = require('./mongoose_schema');

let Item = mongoose.model('Books',ItemSchema);

mongoose.connect('mongodb://127.0.0.1:27017').then(() => {
    let i = 0;
    fs.readdirSync('./data/img').forEach(file => {
        if (/.jpg/.test(file)) {
            ++i;
            console.log(file);
            let newItem = new Item();
            newItem.id = i;
            newItem.img.data = fs.readFileSync('./data/img/' + file);
            newItem.img.contentType = 'image/jpg';
            newItem.img.id = i;
            newItem.name = 'A book';
            newItem.author = 'Paul Sheldon';
            newItem.synopsis = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
            newItem.year = 2018;
            switch (true) {
                case (i < 15):
                    newItem.category = 'Fiction';
                    break;
                case (i < 22):
                    newItem.category = 'Philosophy';
                    break;
                case (i < 28):
                    newItem.category = 'Poetry';
                    break;
                default:
                    newItem.category = 'Philosophy';
            }
            newItem.save();
        }
    });
});


