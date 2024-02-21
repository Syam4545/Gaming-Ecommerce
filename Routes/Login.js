const { Router } = require('express');
const USER = require('../Schemas/UserSchema');
const bcrypt = require('bcrypt')
const router = Router();

//login
router.post('/', async (req, res) => {


  try {
    const { UserName, Password } = req.body;
    const user = await USER.findOne({ username: UserName });

    if (user) {
      console.log(Password, user.password)
      const passwordMatch = bcrypt.compareSync(Password, user.password)
       
      if (passwordMatch) {
        res.status(200).json({ message: 'User Found' });
      } else {
        res.status(400).json({ message: 'Password Error' });
      }
    } else {
      res.status(404).json({ message: 'User Not Found' });
    }
  } catch (error) {
    res.status(503).json({ message: 'Server Unavailable' });
  }
});


module.exports = router;
