const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
    const name = req.query.name || "Guest";
    res.json({ message: `Hello, ${name}! Welcome to our service.` });
});

app.listen(3000, () => console.log("Greeting service running on port 3000"));
