/*import express from "express";
import ProductController from "./src/controller/product.controller.js";
const server = express();
const productController = new ProductController();
server.get("/", (req, res) => {
  productController.getProducts(req, res);
});
server.use(express.static("src/views"));
server.listen(3400, () => {
  console.log("server is listening on 3400");
});*/
import express from "express";
import ProductController from "./src/controller/product.controller.js";
import UserController from "./src/controller/user.controller.js";
import path from "path";
import ejslayouts from "express-ejs-layouts";
import validationMiddleware from "./src/middlewares/validation.middleware.js";
import { uploadFile } from "./src/middlewares/file-upload.middleware.js";
import session from "express-session";
import { auth } from "./src/middlewares/auth.middleware.js";
import cookieParser from "cookie-parser";
import { setLastVisit } from "./src/middlewares/lastVisit.middleware.js";
// const express = require('express');
const server = express();
server.use(express.static("public"));
server.use(cookieParser());
server.use(setLastVisit);
server.use(
  session({
    secret: "3eD65Mwx",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
//parse FORM data.
//So that we cant integrate the new-product.ejs file with the other files . hence, we are parsing the data.
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
//setup veiw engine settings
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));
server.use(ejslayouts);
// create an instance of ProductController
const productController = new ProductController();
//create an instance of the userController
const userController = new UserController();
server.get("/register", userController.getRegister);
server.get("/login", userController.getLogin);
server.post("/register", userController.postRegister);
server.post("/login", userController.postLogin);
server.get("/logout", userController.logout);
//to get products webpage.
//  use setLastVisit , auth below if you wanty to delete the cookie else leave it .
server.get("/", auth, productController.getproducts);
// to get the new product webpage.
server.get("/new", auth, productController.getAddForm);
//to add new products in the products webpage

server.post(
  "/",
  auth,
  uploadFile.single("imageUrl"),
  validationMiddleware,
  productController.postAddProduct
);
//"/:id" they are called url parameter .It acts like placeholder.
server.get("/update-product/:id", auth, productController.getUpdateProductVeiw);
server.post("/update-product", auth, productController.postUpdateProduct);

// to delete the products
server.post("/delete-product/:id", auth, productController.deleteProduct);
server.post("/search", auth, productController.search);
// In your routes file
server.use(express.static("src/views"));
// return res.send('Welcome to Inventory App');
server.listen(3400);
console.log("Server is listening on port 3400");
