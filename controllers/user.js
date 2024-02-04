const UserModel = require('../model/users');

module.exports={
     signup: async (req, res) => {
        try {
          const { name, email, password } = req.body;
          const user = new UserModel({ name, email, password})
          await user.save();
          res.status(201).json({ message: 'User created successfully' });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      },
       login: async (req, res) => {
        try {
          const { email, password } = req.body;
          const user = await UserModel.findOne({ email,password});
      
          if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
          }
    
          res.json({ message: 'Login successful' });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }

}