import path from "path";
import ProductModel from "../models/product.model.js";
class ProductController {
  getproducts(req, res) {
    let products = ProductModel.getAll();
    console.log(products);
    console.log(path.resolve());
    res.render("products", { products, userEmail: req.session.userEmail });
    // return res.sendFile(
    //   path.join(path.resolve(), "src", "views", "products.html")
    // );
  }
  getAddForm(req, res, next) {
    return res.render("new-product", {
      errorMessage: null,
      userEmail: req.session.userEmail,
    });
  }

  // addNewProduct(req, res, next) {
  //access data from FORM
  //   console.log(req.body);
  //   ProductModel.add(req.body);
  //   let products = ProductModel.getAll();
  //or we can also use
  //var products=ProductModel.getAll();

  //after we have added a new product we would like to send the user back to the products page.
  //   return res.render("products", { products: products });
  // }

  postAddProduct(req, res, next) {
    const { name, desc, price } = req.body;
    const imageUrl = "images/" + req.file.filename;
    ProductModel.add(name, desc, price, imageUrl);
    var products = ProductModel.getAll();
    return res.render("products", {
      products,
      userEmail: req.session.userEmail,
    });
  }

  getUpdateProductVeiw(req, res, next) {
    // 1. if product exists then return view
    const { id } = req.params;
    const productFound = ProductModel.getById(id);
    if (productFound) {
      res.render("update-product.ejs", {
        products: productFound,
        errorMessage: null,
        userEmail: req.session.userEmail,
      });
    }
    // 2. else return errors.
    else {
      res.status(404).send("Product not found");
    }
  }

  postUpdateProduct(req, res) {
    ProductModel.update(req.body);
    var products = ProductModel.getAll();
    res.render("products", {
      products: products,
      userEmail: req.session.userEmail,
    });
  }

  deleteProduct(req, res) {
    const id = req.params.id;
    const productFound = ProductModel.getById(id);
    if (!productFound) {
      return res.status(401).send("Product not found");
    }
    ProductModel.delete(id);
    var products = ProductModel.getAll();
    res.render("products", {
      products: products,
    });
  }
  // Handle search functionality
  search(req, res) {
    try {
      const searchTerm = req.body.searchTerm;

      console.log("Search request received:", { searchTerm });

      // Check if search term is provided
      if (!searchTerm || searchTerm.trim() === "") {
        return res.render("searchResults", {
          products: [],
          searchTerm: "",
          message: "Please enter a search term",
        });
      }

      // Get search results using the model's search method
      const searchResults = ProductModel.search(searchTerm);

      console.log("Search results:", searchResults.length, "products found");

      // Render search results view
      res.render("searchResults", {
        products: searchResults,
        searchTerm: searchTerm.trim(),
        message:
          searchResults.length === 0
            ? `No products found matching "${searchTerm.trim()}"`
            : null,
        userEmail: req.session.userEmail,
      });
    } catch (error) {
      console.error("Error in search:", error);
      res.render("searchResults", {
        products: [],
        searchTerm: req.body.searchTerm || "",
        message: "An error occurred while searching. Please try again.",
      });
    }
  }
}
export default ProductController;
