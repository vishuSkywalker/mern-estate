import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    // ⚡ Bolt: Use async hash to prevent blocking the Node.js event loop
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req,res,next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, 'User not found'));
    // ⚡ Bolt: Use async compare to prevent blocking the Node.js event loop
    const validPassword = await bcryptjs.compare(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
    const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
  } catch (error) {
    next(error);
  }
}

export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({email: req.body.email})
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = user._doc;
      res
      .cookie('access_token', token, { httpOnly: true})
      .status(200)
      .json(rest);
    } else {
      // ⚡ Bolt: Use crypto.randomBytes for secure random generation instead of Math.random
      const generatedPassword = crypto.randomBytes(16).toString('hex');
      // ⚡ Bolt: Use async hash to prevent blocking the Node.js event loop
      const hashedPassword = await bcryptjs.hash(generatedPassword, 10);
      const randomSuffix = crypto.randomBytes(2).toString('hex');
      const newUser = new User({ username: req.body.name.split(" ").join("").toLowerCase() + randomSuffix, email: req.body.email, password: hashedPassword, avatar: req.body.photo });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      // ⚡ Bolt: Destructure newUser._doc instead of user._doc to prevent null reference errors
      const { password: pass, ...rest } = newUser._doc;
      res
      .cookie('access_token', token, { httpOnly: true})
      .status(200)
      .json(rest);
    }
  } catch (error) {
    next(error)
  }
}