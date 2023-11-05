const QrCode = require('../models/qrModel')
const Ticket = require('../models/ticketModel')



const getTickets= async(req,res) => {
    const data = await Ticket.find({user_id:req.query.user_id})
    
    res.status(200).json(data)
}

const getQr= async(req,res) => {
    console.log(req.query.qr_code)
    const data = await QrCode.find({qr_code:req.query.qr_code})
    res.status(200).json(data)
    
}


const createTicket = async (req, res) => {

    if (!req.body) {
        res.status(400).json({ message: "Data is empty" })
        return
    }    
    
try{
   
    const newTicket = await Ticket.create({
        user_id: req.body.user_id,
        bus_id:req.body.bus_id,
        source:req.body.source,
        destination:req.body.destination,
        seat_number:req.body.seat_no,
        fare:req.body.fare ,
        bus_name : req.body.bus_name
    })
    res.status(200).send(newTicket)  
    
}catch(e){
    console.log(e.message)
    res.status(400)
}
res.status(400)
}

const createQR = async (req, res) => {

    if (!req.body) {
        res.status(400).json({ message: "Data is empty" })
        return
    }    
    
try{
   
    const newQR = await QrCode.create({
        bus_id: req.body.bus_id,
        bus_name:req.body.bus_name,
        seat_number:req.body.seat_no,
        qr_code:req.body.qr_code,
       
    })
    res.status(200).send(newQR)  
    
}catch(e){
    console.log(e.message)
    res.status(400)
}
res.status(400)

}



module.exports = {getTickets,getQr,createTicket,createQR}