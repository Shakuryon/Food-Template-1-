const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/maps-key", (req, res) => {
    res.json({
        key: process.env.GOOGLE_MAPS_API_KEY
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});