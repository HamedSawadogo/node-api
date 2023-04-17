const User = require("../model/user.model");
const bcrypt = require("bcrypt");

module.exports.login = async (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (!user) {
      res.status(400).json({ message: "adresse email incorrecte" });
    }
    bcrypt
      .compare(req.body.password, user.password)
      .then((valid) => {
        if (!valid) {
          res.status(400).json({ message: "mot de passe  incorrect" });
        }
        res.status(200).json({ userId: user._id, token: "TOKEN" });
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  });
};
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
module.exports.usersData = async (req, res) => {
  await User.find()
    .then((data) => res.status(201).json({ data }))
    .catch((error) => res.status(400).json({ error }));
};
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
module.exports.findUser = async (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((thing) => res.status(200).json({ thing }))
    .catch((error) => res.status(400).json({ error }));
};

module.exports.upDateUser = async (req, res) => {
  try {
    User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() =>
        res.status(201).json({ response: "Utilisateur modifié avec success!" })
      )
      .catch((error) => res.status(400).json({ error }));
  } catch (error) {
    res.status(500).json({ error });
  }
};
