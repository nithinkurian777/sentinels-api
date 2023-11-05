const express = require('express')
const todoController = require('../controllers/todoController')
const ticketController  = require('../controllers/ticketController')
const auth = require("../middleware/auth")
const router = express.Router()


router.post('/', todoController.createUser)
router.post('/login',todoController.login)
router.post('/create-ticket/',ticketController.createTicket)
router.get('/get-qr-details/',ticketController.getQr)
router.get('/get-tickets/',ticketController.getTickets)
router.post('/create-qr/',ticketController.createQR)




module.exports = router