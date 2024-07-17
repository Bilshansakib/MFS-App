const express = require("express");
const { mongoose } = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();
// const User = require('./models/userModels')
// const authRouter = require('./routes/authRoute')

const authRouter = require("./routes/authRoute");

const port = process.env.PORT || 9000;
// middleware
app.use(express.json());

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    // "https://project-finale-f9ff7.firebaseapp.com",
    // "https://project-finale-f9ff7.web.app",
  ],
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// 2 routes

// mongoDB
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("Database Connected"))
//   .catch((err) => console.log("Database not connected", err));
mongoose
  .connect(
    `mongodb+srv://MFS-app-manager:VIvdXErahX3QrvVE@cluster0.7hlvjai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error("Database not connected", err));

app.use("/auth", authRouter);

// 4 error
app.use((err, res, req, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});
// chatGPT

// server
// // app.use("/auth", authRouter);
// // app.get("/", (req, res) => {
// //   res.send("Hello from MFS App Server..");
// // });

// app.post("/register", async (req, res) => {
//   const { name, password, email } = req.body;

//   try {
//     const collection = mongoose.connection.collection("my-user");
//     const newUser = new User({ name, password, email });
//     await newUser.save();
//     res.status(201).send("User registered successfully");
//   } catch (error) {
//     res.status(500).send("Error registering user");
//   }
// });

app.listen(port, () => {
  console.log(`MFS App server is running on port the ${port}`);
});
