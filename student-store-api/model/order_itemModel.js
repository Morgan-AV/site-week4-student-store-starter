const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

// function gets all the order_items
const getAllOrder_Items = async () => {
    return prisma.OrderItem.findMany();
};

//Function to get order_items by ID
const getOrder_ItemById = async (id) => {
    return prisma.OrderItem.findUnique({ where: { id: parseInt(id) } });
};


//Function to create a order_items
const createOrder_Item = async (orderItemData) => {
    return prisma.OrderItem.create({ data: {
        order_id: parseInt(orderItemData.order_id),
        product_id: parseInt(orderItemData.product_id),
        quantity: parseInt(orderItemData.quantity),
        price: parseFloat(orderItemData.price),
        } 
    });
};

  //Function to update a order_items
const updateOrder_Item = async (id, orderItemData) => {
    return prisma.OrderItem.update({
        where: { id: parseInt(id) },
        data: orderItemData,
    });
};

//Function to delete order_items
const deleteOrder_Item = async (id) => {
    return prisma.OrderItem.delete({ where: { id: parseInt(id) } });
};

//export the functions
module.exports = {
    getAllOrder_Items,
    getOrder_ItemById,
    createOrder_Item,
    updateOrder_Item,
    deleteOrder_Item,
};