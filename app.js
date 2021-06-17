const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const expressHbs = require("express-handlebars");

const app = express();
// PUG
// app.set("view engine", "pug");
// app.set("views", "views");
// Handlebars

// Hanlde bars
// app.engine(
//   "hbs",
//   expressHbs({
//     layoutsDir: "views/layouts/",
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// );
// app.set("view engine", "hbs");
// app.set("views", "views");

//EJS Pugs
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const { getPageNotFound } = require("./controllers/error");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// catch all route
app.use(getPageNotFound);
// express way
app.listen(3001);

// node js way
/**
 * const server = http.createServer(app);
 * server.listen(3000, () => console.log("server running at 3000"));
 */
