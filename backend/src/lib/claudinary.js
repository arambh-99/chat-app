import { v2 as cloudinary } from "cloudinary";

import { config } from "dotenv";

config();
console.log("CLOUDINARY_API_KEY:", 188879379189711 ? "FOUND" : "MISSING");


cloudinary.config({
  cloud_name: "dgvvco0kl",
  api_key: 188879379189711,
  api_secret: "WtQpS8UTJscQ9E63JIbbnGxuDqI",
  secure: true
});

export default cloudinary;