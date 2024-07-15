const express = require("express");
const mongoose = require("mongoose");
const app = express();

const cors = require("cors");
const port = process.env.PORT || 9000;
// middleware
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

app.use(express.json());
// routes

// mongoDB
// mongoose
//   .connect(`${process.env.MONGO_URL}`)
//   .then(() => console.log("Database Connected"))
//   .catch((err) => console.log("Database not connected", err));
mongoose
  .connect(
    `mongodb+srv://MFS-app-manager:VIvdXErahX3QrvVE@cluster0.7hlvjai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database not connected", err));

// 4 error
app.use((err, res, req, next)=> {
    err.statuCode = err.statuCode || 500
    err.status = err.status || "error"

    res.status(err.statuCode).json({
        status: err.status,
        message: err.message,
    })
})


// server
app.get("/", (req, res) => {
  res.send("Hello from MFS App Server..");
});

app.listen(port, () => {
  console.log(`medical camp is running on port the ${port}`);
});
