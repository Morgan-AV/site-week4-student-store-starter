require("dotenv").config()
const express = require("express");
const PORT = 3000;
const cors = require("cors");
const morgan = require("morgan");


//import the Routes
const productRoutes = require("../routes/productRoutes");
const orderRoutes = require("../routes/orderRoutes");
const order_itemRoutes = require("../routes/order_itemRoutes");

// Middleware
const app = express();
app.use(cors()); // Enable CORS middleware to handle cross-origin requests
app.use(morgan("dev"));
app.use(express.json()); //Enable the use of JSON data

app.get("/", (req, res) => {
    res.send("Hello from the backend -- You are currently at the / route");
});

//add routes here
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/ordersItems", order_itemRoutes);



app.listen(PORT, () => {
    console.log(`Server is up and running on PORT: ${PORT}`);
});