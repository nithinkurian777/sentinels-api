const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs');
const { count } = require('../models/userModel')
const Data = require('../models/dataModel')
const { json } = require('express')



const createUser = async (req, res) => {

    if (!req.body) {
        res.status(400).json({ message: "Data is empty" })
        return
    }    
    encryptedPassword = await bcrypt.hash(req.body.password, 10);
try{
   
    const newUser = await User.create({
        name: req.body.name,
        username:req.body.username,
        email:req.body.email,
        password:encryptedPassword        
    })
    res.status(200).send(newUser)  
    
}catch(e){
    console.log(e.message)
    res.status(400)
}
res.status(400)

}

const login = async (req,res)=>{
    if (!req.body) {
        res.status(400).json({ message: "Data is empty" })
        return
    } 
    const email = req.body.email
    const password = req.body.password
    
  var user = await User.findOne({email:email});
 
    if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          "ahfdkufhkh4768746ghjgfjg234hkjhdk@",
          {
            expiresIn: "2h",
          }
        );
      user.token = token;        
        console.log(user)
        // user
        res.status(200).json(user);
    }else{
        res.status(400).send("Invalid Credentials");
    }
    
}


module.exports = { login ,createUser}