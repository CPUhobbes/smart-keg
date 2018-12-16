const Users = require('../../models/Users');

const UsersController = {
  // Get all players from DB
  validateLogin: (req, res) => {
    const { username, password } = req.body;
    return Users.findOne({
      username,
      password,
    }).then(results => res.json(results));
  },
};

module.exports = UsersController;
