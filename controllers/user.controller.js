const models = require("../models/user.query");

exports.signUp = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;
    console.log("signup working");
    const newUser = await models.postOne({ name, email, password });
    res.status(201).json({ newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// exports.signIn = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await models.findOne({ email, password });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.status(200).json({ user });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
exports.getUser = async (req, res) => {
  try {
    const user = await models.finduser();
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
