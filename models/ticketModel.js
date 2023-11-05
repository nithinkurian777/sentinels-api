const mongoose = require('mongoose')
const moment= require('moment') 

const ticketSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    bus_id: {
        type: String,
        required: true
    },
    bus_name:{
        type:String,
        required:true
    },
    seat_number:{
        type:String,
        required:true
    }
  
})

module.exports = mongoose.model('Ticket', ticketSchema)