const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

app.use("/api/contacts", require('./routes/contactRoutes'))

app.use(errorHandler)

app.listen(PORT, () => { // Correct usage of app.listen()
    console.log(`Server running on PORT ${PORT}`);
});
