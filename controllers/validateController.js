const bookModel = require('../models/bookModel')

const validateBook = async(request, response) => {
    const givenISBN = request.body.ISBN

    try
    {
        const validISBN = await bookModel.findOne({ISBN : givenISBN})
        if(validISBN)
        {
            return response.status(200).json(validISBN)
        }
        return response.status(400).send({message: `Invalid ISBN Number!!`})
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

module.exports = {validateBook}