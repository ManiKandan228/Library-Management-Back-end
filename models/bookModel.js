const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema(
    {
        bookName : {
            type : String,
            required : true
        },
        authorName : {
            type : String,
            required : true
        },
        ISBN : {
            type : Number,
            required : true,
            index : true,
            unique : true
        },
        genre : {
            type : String,
            required : true,
            enum : ["Fiction", "Non-Fiction", "Mystery", "Romance", "Science Fiction", "Fantasy", "Thriller", "Adventure", "Epic", "Gothic","Magical Realism", "Historical Fiction", "Young Adult", "Satire"]
        },
        availability : {
            type : String,
            default : "Available"
        }
    },
    {
        collection : 'books'
    }
)
module.exports = mongoose.model('books', bookSchema)