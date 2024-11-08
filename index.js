const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const database = require("./config/database");
const route = require("./routes/mainRoutes");
const app = express();
require('dotenv').config();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

database.connect();

app.use(
  session({
    secret: "your-secret-key", // Khóa bí mật để ký session
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Đặt thành true nếu dùng HTTPS
  })
);

route(app);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
