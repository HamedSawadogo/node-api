const User = require("../model/user.model");

module.exports.addUser = async (req, res) => {
  const user = new User({ ...req.body });
  user
    .save()
    .then(() => res.status(201).json({ message: "objet crée avec success!" }))
    .catch((error) => res.status(400).json({ error }));
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
 * ajouter un utilisateur a */
// /**
//  *
//  * supprimer un utilisateur
//  */
// module.exports.deleteUser = async (req, res) => {
//   if (!req.params.id) {
//     return;
//   }
//   res.status(201).json({ message: "suppresion effectuté avec success!" });
//   // try {
//   //   // console.log(req.params.id);
//   //   // const user = await User.findById(req.params.id);
//   //   // await user.remove();

//   // } catch (error) {
//   //   res.status(400).json({ error });
//   // }
// };
// /**
//  * rechercher un utilisateur
//  * @param {*} req
//  * @param {*} res
//  */
// module.exports.findUser = async (req, res) => {
//   const user = await User.findById(req.params.id);
//   user
//     .then((res) =>
//       res.status(200).json({
//         res,
//       })
//     )
//     .catch((error) => res.status(400).json({ error }));
// };

// module.exports.upDateUser = async (req, res) => {
//   res.json({ response: "modification d'un utilisateur en Cours..." });
// };
