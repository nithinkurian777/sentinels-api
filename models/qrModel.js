const mongoose = require('mongoose')
const moment= require('moment') 

const qrSchema = mongoose.Schema({
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
    },
    qr_code:{
        type:String,
        required:true
    }
  
})

module.exports = mongoose.model('QrCode', qrSchema)