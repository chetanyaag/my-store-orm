"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
const Category_1 = require("./entities/Category");
const Product_1 = require("./entities/Product");
function seedDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        yield data_source_1.AppDataSource.initialize();
        console.log("Database connected!");
        const categoryRepository = data_source_1.AppDataSource.getRepository(Category_1.Category);
        const productRepository = data_source_1.AppDataSource.getRepository(Product_1.Product);
        const categoriesData = [
            { name: "Electronics", description: "Electronic Items", isActive: true },
            { name: "Books", description: "Reading Materials", isActive: true },
            { name: "Clothing", description: "Wearable Items", isActive: true },
        ];
        const savedCategories = yield categoryRepository.save(categoriesData);
        console.log("Categories seeded!");
        const productsData = [
            // { name: "Smartphone", price: 699, category: savedCategories[0].id }, 
            { name: "Smartphone", price: 699, stockQuantity: 10, category: savedCategories[0] },
            { name: "Laptop", price: 999, stockQuantity: 10, category: savedCategories[0] },
            { name: "Fiction Novel", price: 19, stockQuantity: 10, category: savedCategories[1] },
            { name: "T-shirt", price: 15, stockQuantity: 10, category: savedCategories[2] },
        ];
        yield productRepository.save(productsData);
        console.log("Products seeded!");
        yield data_source_1.AppDataSource.destroy();
    });
}
seedDatabase()
    .then(() => console.log("Seeding completed!"))
    .catch((err) => console.error("Seeding failed:", err));
