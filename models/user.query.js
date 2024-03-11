const { User } = require("./user.model");
exports.postOne = async (info) => {
  try {
    const data = {
      name: info.name,
      email: info.email,
      password: info.password,
    };
    const newUser = await User.create({
      name: data.name,
      email: data.email,
      password: data.password,
    });
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error("Error adding new User to DB.");
  }
};

exports.finduser = async () => {
  try {
    const user = await User.findAll({
      attributes: ["id", "name", "email", "password"],
    });

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error finding User from DB.");
  }
};
