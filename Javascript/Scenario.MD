 If I were working at Amazon and storing product data like a shirt in MongoDB, I’d store metadata fields such as name, brand, category, price, discount, stock, size and color options, material, fit, sleeve type, images, ratings, review count, seller ID, and timestamps.

This metadata is used across many features: name and brand help with search, category and size are used in filters, stock is checked during checkout, and price with discount is shown to users. Reviews build trust, and images are shown on the product page.

The metadata also helps in linking to the seller, sorting by created date, and hiding inactive products. MongoDB is flexible, so we can use different fields depending on the product type — making it ideal for large platforms like Amazon.

# Metadata Fields Stored (MongoDB Document):

{
  name: "Men's Cotton Slim Fit Shirt",
  brand: "Levi's",
  category: "Clothing > Men > Shirts",
  description: "Breathable cotton, slim fit, full sleeve",
  price: 1299,
  discount: 20,
  stock: 45,
  sizeOptions: ["S", "M", "L", "XL"],
  colorOptions: ["Black", "White"],
  material: "Cotton",
  fit: "Slim",
  sleeveType: "Full Sleeve",
  images: ["img1.jpg", "img2.jpg"],
  rating: 4.5,
  reviewsCount: 150,
  sellerId: "SELLER123",
  isActive: true,
  createdAt: ISODate("2025-06-29"),
  updatedAt: ISODate("2025-06-29")
}
