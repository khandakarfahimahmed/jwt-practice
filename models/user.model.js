const { Sequelize, DataTypes } = require("sequelize");

const config = {
  host: "localhost",
  dialect: "postgres",
};

const sequelize = new Sequelize("user_db", "postgres", "fahim", config);

const User = sequelize.define(
  "User",
  {
    // Define user attributes here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
    tableName: "user_info",
    // Other model options
  }
);
(async () => {
  try {
    await sequelize.sync();
    console.log("Database synchronized");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
})();
module.exports = { User, sequelize };
