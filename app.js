// Reconfigured app.js for After School application
const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Serve the After School HTML file
app.use(express.static("public")); // Ensure your static files are in the 'public' folder

// Route to handle course fetching
app.get("/api/courses", (req, res) => {
    // Example static data, replace with dynamic API call if needed
    const courses = [
        { id: 1, subject: "Painting", location: "Oxford", price: 100, spaces: 10 },
        { id: 2, subject: "Sculpting", location: "York", price: 80, spaces: 8 },
        { id: 3, subject: "Photography", location: "Manchester", price: 50, spaces: 5 }
    ];
    res.json(courses);
});

// Default error handling middleware
app.use((req, res, next) => {
    res.status(404).send("Sorry, that route does not exist.");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});
