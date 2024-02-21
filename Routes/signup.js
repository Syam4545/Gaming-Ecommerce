const { Router } = require('express');
const USER = require('../Schemas/UserSchema');
const bcrypt = require('bcrypt')
const router = Router();


//Signin
router.post('/', async (req, res) => {

    console.log(req.body)
    try {
      const { UserName, Password, Email, Address } = req.body;
      const HashedPassword = bcrypt.hashSync(Password, 10)
  
  
  
      const user = new USER({
        username: UserName,
        password: HashedPassword,
        email: Email,
        address: Address
      })
  
  
      await user.save()
  
      res.status(200).json({ message: "Registration Sucessfull" })
  
    } catch (error) {
  
      res.status(500).json({ message: "Registration Failed" })
      console.log(error)
  
    }
  
  })
  
  module.exports = router;
  