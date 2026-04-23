const express = require("express");
const path = require("path");

const app = express();

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// Route for homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Optional: handle other routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
