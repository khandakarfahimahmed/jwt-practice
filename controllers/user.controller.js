const models = require("../models/user.query");
const bcrypt = require("bcrypt");

exports.signUp = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await models.postOne({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await models.findOneUser({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getAllUser = async (req, res) => {
  try {
    const user = await models.findAlluser();
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
