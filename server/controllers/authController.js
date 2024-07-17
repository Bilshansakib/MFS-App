const bcrypt = require('bcryptjs');
const User = require("../models/userModels");
const jwt = require("jsonwebtoken");
const createError = require("../utiles/appError");

// const test = (req, res) => {
//   res.json('test is working Insha Allah')
// }


// Registration User
exports.signup = async (req, res, next) => {
  console.log(req.body)
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user)
    if (user) {
      return next(new createError("User already exist!", 400));
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
res.send('sadasd')
    // const newUser = await User.create({
    //   ...req.body,
    //   password: hashedPassword,
    // });
    // // Assign JWt to user
    // const token = jwt.sign({ _id: newUser._id }, "secretkey123", {
    //   expiresIn: "90d",
    // });

    // res.status(201).json({
    //   status: "success",
    //   message: "User registered successfully",
    //   token,
    //   user: {
    //     _id: newUser._id,
    //     name: newUser.name,
    //     email: newUser.email,
    //     role: newUser.role,
    // }
    // });
  } catch (error) {
    console.log(error)
    next(error);
    
  }
  const { name, password, email } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Create new user
    const newUser = new User({
      name,
      password: hashedPassword,
      email
    });

    // Save user to database
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }

  
};

// /////////////////////////// laptop video
// const registerUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     // check name
//     if (!name) {
//       return res.json({
//         error: "name is required",
//       });
//     }
//     //check password
//     if (!password || password.length < 5) {
//       return res.json({
//         error: "Password or Pin should be 5 cherecter at least",
//       });
//     }
//     //check email
//     const exist = await User.findOne({ email });
//     if (exist) {
//       return res.json({
//         error: "Email is token already",
//       });
//     }
//     const user = await User.create({
//       name,email,password
//     })
//     return res.json(user)
//   } catch (error) {
//     console.log(error)
//   }
// };
//logging user
// ---------------------------------------------------
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return next(new createError("User not found", 404));

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return next(new createError("Invalid email or password", 401));
    }

    const token = jwt.sign({ _id: newUser._id }, "secretkey123", {
      expiresIn: "90d",
    });

    res.status(200).json({
      status: "success",
      token,
      message: "Logged in successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

// module.exports = {
//   // registerUser
//   // test
// }