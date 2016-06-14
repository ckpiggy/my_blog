var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: String,
    author: String,
    updateDate: {type: Date, default: Date.now},
    content: String
});

module.exports = mongoose.model('Article', ArticleSchema);