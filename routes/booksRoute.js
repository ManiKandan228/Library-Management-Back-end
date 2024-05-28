const express = require('express')
const router = express.Router()
const {addNewBook, getAllBooks, updateBook, deletBook} = require('../controllers/booksController')
const {validateBook} = require('../controllers/validateController')

router.route('/').post(addNewBook).get(getAllBooks).patch(updateBook).delete(deletBook)
router.route('/validate').post(validateBook)

module.exports = router