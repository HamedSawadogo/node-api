const User = require("../model/user.model");

/**
 *
 * @param {*} req
 * @param {*} res
 * obtenir la liste des utilisateurs
 */
module.exports.usersData = async (req, res) => {
  const users = User.find();
  users
    .then((data) => res.status(201).json({ data }))
    .catch((error) => res.status(400).json({ error }));
};
/**
 *
 * @param {*} req
 * @param {*} res
 * ajouter un utilisateur a */
module.exports.addUser = async (req, res) => {
  try {
    const user = new User({ ...req.body });
    console.log(user);
    user
      .save()
      .then((res) => res.status(201).json({ message: res }))
      .catch((error) => res.status(400).json({ error }));
  } catch (error) {
    res.status(400).json({ error });
  }
};
/**
 *
 * supprimer un utilisateur
 * @param {*} req
 * @param {*} res
 * @returns
 */
module.exports.deleteUser = async (req, res) => {
  if (!req.params.id) {
    return;
  }
  res.status(201).json({ message: "suppresion effectuté avec success!" });
  // try {
  //   // console.log(req.params.id);
  //   // const user = await User.findById(req.params.id);
  //   // await user.remove();

  // } catch (error) {
  //   res.status(400).json({ error });
  // }
};
/**
 * rechercher un utilisateur
 * @param {*} req
 * @param {*} res
 */
module.exports.findUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  user
    .then((res) =>
      res.status(200).json({
        res,
      })
    )
    .catch((error) => res.status(400).json({ error }));
};

module.exports.upDateUser = async (req, res) => {
  res.json({ response: "modification d'un utilisateur en Cours..." });
};
