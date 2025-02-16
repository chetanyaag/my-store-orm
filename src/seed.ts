import { AppDataSource } from "./data-source";
import { Category } from "./entities/Category";
import { Product } from "./entities/Product";


async function seedDatabase() {
  await AppDataSource.initialize();
  console.log("Database connected!");

  const categoryRepository = AppDataSource.getRepository(Category);
  const productRepository = AppDataSource.getRepository(Product);


  const categoriesData = [
    { name: "Electronics", description: "Electronic Items" , isActive: true},
    { name: "Books", description: "Reading Materials" , isActive: true},
    { name: "Clothing", description: "Wearable Items" , isActive: true},
  ];

  const savedCategories = await categoryRepository.save(categoriesData);
  console.log("Categories seeded!");


  const productsData = [
    // { name: "Smartphone", price: 699, category: savedCategories[0].id }, 
    { name: "Smartphone", price: 699, stockQuantity: 10, category: savedCategories[0]}, 
    { name: "Laptop", price: 999, stockQuantity: 10, category: savedCategories[0]}, 
    { name: "Fiction Novel", price: 19,  stockQuantity: 10, category: savedCategories[1] }, 
    { name: "T-shirt", price: 15, stockQuantity: 10, category: savedCategories[2] }, 
  ];

  await productRepository.save(productsData);
  console.log("Products seeded!");

  await AppDataSource.destroy();
}

seedDatabase()
  .then(() => console.log("Seeding completed!"))
  .catch((err) => console.error("Seeding failed:", err));
