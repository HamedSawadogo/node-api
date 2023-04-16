const User = require("../model/user.model");
const bcrypt = require("bcrypt");

module.exports.addUser = async (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        ...req.body,
        password: hash,
      });
      user
        .save()
        .then(() =>
          res.status(201).json({ message: "objet crée avec success!" })
        )
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

/**
 * obtenir la liste des utilisateurs
 */
module.exports.usersData = async (req, res) => {
  await User.find()
    .then((data) => res.status(201).json({ data }))
    .catch((error) => res.status(400).json({ error }));
};
/**
 * supprimer un utilisateur
 */
module.exports.deleteUser = async (req, res) => {
  if (!req.params.id) {
    return;
  }
  try {
    User.deleteOne({ _id: req.params.id })
      .then(() =>
        res.status(201).json({ message: "utilisateur supprimé avec success!" })
      )
      .catch((error) => res.status(400).json({ error }));
  } catch (error) {
    res.status(400).json({ error });
  }
};
/**
 * rechercher un utilisateur
 */
module.exports.findUser = async (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((thing) => res.status(200).json({ thing }))
    .catch((error) => res.status(400).json({ error }));
};

// module.exports.upDateUser = async (req, res) => {
//   res.json({ response: "modification d'un utilisateur en Cours..." });
// };
