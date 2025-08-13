export default class ProductModel {
  constructor(id, name, desc, price, imageUrl) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.imageUrl = imageUrl;
  }
  //To return the products or the books name given below.
  static getAll() {
    return products;
  }

  static update(Productobj) {
    const index = products.findIndex((p) => p.id == Productobj.id);
    products[index] = Productobj;
  }
  static delete(id) {
    const index = products.findIndex((p) => {
      return p.id == id;
    });
    products.splice(index, 1);
  }
  static add(name, desc, price, imageUrl) {
    //generating id below and keeping other attributes same.
    let newProduct = new ProductModel(
      products.length + 1,
      name,
      desc,
      price,
      imageUrl
    );
    products.push(newProduct);
  }

  static getById(id) {
    return products.find((p) => p.id == id);
  }
  // Static method to search products by name
  static search(searchTerm) {
    try {
      if (!searchTerm || searchTerm.trim() === "") {
        return [];
      }

      const term = searchTerm.toLowerCase().trim();

      // Search in product name and description
      const results = products.filter(
        (product) =>
          product.name.toLowerCase().includes(term) ||
          product.desc.toLowerCase().includes(term)
      );

      console.log(
        `Search for "${searchTerm}" returned ${results.length} results`
      );
      return results;
    } catch (error) {
      console.error("Error searching products:", error);
      return [];
    }
  }
}
// we donot have database here so i am using the method products for providing data here.
var products = [
  new ProductModel(
    1,
    "Atomic Habits",
    "A supremely practical and useful book",
    19.99,
    "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
  ),
  new ProductModel(
    2,
    "IKIGAI",
    "The japanese secret to  a long and happy life",
    29.99,
    "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"
  ),
  new ProductModel(
    3,
    "Deep Work",
    "Rules for focused success in a distracted world",
    39.99,
    "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg"
  ),
  new ProductModel(
    4,
    "The Power of Now",
    "A GUIDE TO SPIRITUAL ENLIGHTENMENT",
    236,
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1689947880i/6708.jpg"
  ),
  new ProductModel(
    5,
    "Thinking, Fast and Slow",
    "BY NOBEL PRIZE WINNER DANIEL KAHNEMAN",
    512,
    "https://m.media-amazon.com/images/I/41DNuJfahyL._SX322_BO1,204,203,200_.jpg"
  ),
  new ProductModel(
    6,
    "Make Your Bed",
    "LITTLE THINGS THAT CAN CHANGE YOUR LIFE...AND MAYBE THE WORLD",
    144,
    "https://m.media-amazon.com/images/I/71aG+xDKSYL._SY466_.jpg"
  ),
  new ProductModel(
    7,
    "The Subtle Art of Not Giving a F*ck",
    "A COUNTERINTUITIVE APPROACH TO LIVING A GOOD LIFE",
    224,
    "https://m.media-amazon.com/images/I/71QKQ9mwV7L._SY466_.jpg"
  ),
  new ProductModel(
    8,
    "Rich Dad Poor Dad",
    "WHAT THE RICH TEACH THEIR KIDS ABOUT MONEY THAT THE POOR AND MIDDLE CLASS DO NOT!",
    336,
    "https://m.media-amazon.com/images/I/81bsw6fnUiL._SY466_.jpg"
  ),
  new ProductModel(
    9,
    "Ego is the Enemy",
    "THE FIGHT TO MASTER OUR GREATEST OPPONENT",
    256,
    "https://m.media-amazon.com/images/I/71g2ednj0JL._SY466_.jpg"
  ),
];
