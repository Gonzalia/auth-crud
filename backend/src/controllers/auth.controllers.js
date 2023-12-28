import User from "../models/user.model.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;
  const newUser = new User({
    username,
    email,
    password,
  });

  try {
    await newUser.save();
  } catch (error) {
    console.error(error);
  }

  res.send("registrando");
};

export const login = (req, res) => {
  res.send("login");
};
