const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mount routes
const contactRoutes = require("./routes/contactRoutes");
app.use("/api", contactRoutes);  // ✅ so full route is /api/contact
app.use("/api", contactRoutes);
console.log("✅ Contact routes mounted at /api/contact");


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
