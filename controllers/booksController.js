const bookModel = require('../models/bookModel')
const initialData = require('../data/initialData')
const { request, response } = require('express')

const getAllBooks = async(request, response) =>
{
    try{
        const books = await bookModel.find()
        if(books.length === 0)
        {
            const initialBooks = await bookModel.insertMany(initialData)
        }
        return response.status(200).json(books)
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

const addNewBook = async(request, response) => {
    const bookToBeAdded = request.body

    try
    {
        const existingBook = await bookModel.findOne({ISBN : bookToBeAdded.ISBN})
        if(existingBook)
        {
            return response.status(409).send({message: `A book with ISBN ${bookToBeAdded.ISBN} already exists`})
        }
        const insertedBook = await bookModel.create(bookToBeAdded)
        response.status(201).json(insertedBook)
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

const updateBook = async(request, response) => {
    const bookToBeUpdated = request.body

    try
    {
        const updatedBook = await bookModel.updateMany({ISBN : bookToBeUpdated.ISBN}, bookToBeUpdated)
        response.status(200).json(updatedBook)
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

const deletBook = async(request, response) => {
    const bookToBeDeleted = request.body

    try
    {
        const deletedBook = await bookModel.deleteOne({ISBN : bookToBeDeleted.ISBN})
        response.status(200).json(deletedBook)
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

module.exports = {getAllBooks, addNewBook, updateBook, deletBook}