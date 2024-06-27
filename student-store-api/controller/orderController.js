// import orderModel ---------------------------------------------
const orderModel = require("../model/orderModel");

// Function gets all the order
const getAllOrders = async (req, res) => {
    const { category , sort} = req.query;
    let filter = {}; //filter object
    let orderBy = {}; //orderBy - asc/desc

    if (category) {
        filter.category = category;
    }

    if (sort) {
    //set the orderBy according to asc/desc
        orderBy = { name: sort === "asc" ? "asc" : "desc" };
    }

    if (sort) {
    //set the orderBy according to asc/desc
        orderBy = { price:sort == "asc" ? "asc" : "desc" };
    }



    try {
        const orders = await orderModel.getAllOrders(filter, orderBy);
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Function to get order by ID
const getOrderById = async (req, res) => {
    try {
        const order = await orderModel.getOrderById(req.params.id);
        if (order) {
        res.status(200).json(order);
        } else {
        res.status(404).json({ error: "Order not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to create a new order
const createOrder = async (req, res) => {
    try {
        const newOrder = await orderModel.createOrder(req.body);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Function to update an order
const udpateOrder = async (req, res) => {
    try {
        const updatedOrder = await orderModel.updateOrder(req.params.id, req.body);
        if (updatedOrder) {
        res.status(200).json(updatedOrder);
        } else {
        res.status(404).json({ error: "Order not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Function to delete a order
const deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await orderModel.deleteOrder(req.params.id);
        if (deletedOrder) {
        res.status(200).json(deletedOrder);
        } else {
        res.status(404).json({ error: "Order not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const addedOrderItem = async (req,res) => {
    try {
        const addedOrderItem = await orderModel.addedOrderItem(req.body, req.params.order_id);
        if (addedOrderItem) {
        res.status(201).json(addedOrderItem);
        } else {
        res.status(404).json({ error: "Order not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getOrderTotal = async(req, res) => {
    try {
        const orderTotal = await orderModel.getOrderTotal(req.params.order_id);
        if (orderTotal) {
        res.status(201).json(orderTotal);
        } else {
        res.status(404).json({ error: "Order not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//export the functions
module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    udpateOrder,
    deleteOrder,
    addedOrderItem,
    getOrderTotal
};


