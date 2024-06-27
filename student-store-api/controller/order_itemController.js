// import order item Model
const order_itemModel = require("../model/order_itemModel");

// Function gets all the order
const getAllOrder_Items = async (req, res) => {
    const { category, sort} = req.query;
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
        const orderItems = await order_itemModel.getAllOrder_Items(filter, orderBy);
        res.status(200).json(orderItems);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Function to get order by ID
const getOrder_ItemById = async (req, res) => {
    try {
        const orderItem = await order_itemModel.getOrder_ItemById(req.params.id);
        if (orderItem) {
        res.status(200).json(orderItem);
        } else {
        res.status(404).json({ error: "order Item not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to create a new order
const createOrder_Item = async (req, res) => {
    try {
        const neworderItem = await order_itemModel.createOrder_Item(req.body);
        res.status(201).json(neworderItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Function to update an order
const updateOrder_Item = async (req, res) => {
    try {
        const updatedorderItem = await order_itemModel.updateOrder_Item(req.params.id, req.body);
        if (updatedorderItem) {
        res.status(200).json(updatedorderItem);
        } else {
        res.status(404).json({ error: "order Item not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Function to delete a order
const deleteOrder_Item = async (req, res) => {
    try {
        const deletedorderItem = await order_itemModel.deleteOrder_Item(req.params.id);
        if (deletedorderItem) {
        res.status(200).json(deletedorderItem);
        } else {
        res.status(404).json({ error: "order Item not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//export the functions
module.exports = {
    getAllOrder_Items,
    getOrder_ItemById,
    createOrder_Item,
    updateOrder_Item,
    deleteOrder_Item,
};


