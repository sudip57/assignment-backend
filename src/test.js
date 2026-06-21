const productModel = require("./models/product");
const categories = [
  "electronics",
  "mobile",
  "fashion",
  "books",
  "home",
  "sports",
  "beauty",
  "toys",
];
async function seedProducts() {
  try {
    const TOTAL_PRODUCTS = 200000;
    const BATCH_SIZE = 5000;

    console.log("Starting seeding...");

    for (let i = 0; i < TOTAL_PRODUCTS; i += BATCH_SIZE) {
      const products = [];

      for (
        let j = i;
        j < Math.min(i + BATCH_SIZE, TOTAL_PRODUCTS);
        j++
      ) {
        products.push({
          name: `Product ${j + 1}`,
          category:
            categories[Math.floor(Math.random() * categories.length)],
          price: Math.floor(Math.random() * 100000) + 100,
        });
      }

      await productModel.insertMany(products);

      console.log(
        `Inserted ${Math.min(i + BATCH_SIZE, TOTAL_PRODUCTS)} products`
      );
    }

    console.log("200,000 products inserted successfully!");
  } catch (error) {
    console.error(error);
  }
}

seedProducts();