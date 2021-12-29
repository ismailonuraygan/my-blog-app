const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");

const path = require("path")


dotenv.config();
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "/public")));
mongoose.connect(process.env.MONGO_URL ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
}).then(console.log("Connected to MongoDB"))
  .catch(err => console.log(err));





app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);




app.listen("5000", () => console.log("backend is working!"));

