const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

// function gets all the order
const getAllOrders = async () => {
    return prisma.order.findMany({include: {
        orderitems: true
    }});
};

//Function to get order by ID
const getOrderById = async (order_id) => {
    return prisma.order.findUnique({ where: { order_id: parseInt(order_id) },
    include: {
        orderitems: true}}
    );
};


//Function to create a new order
const createOrder = async (orderData) => {
    return prisma.order.create({ data: orderData });
};

  //Function to update a order
const updateOrder = async (order_id, orderData) => {
    return prisma.order.update({
        where: { order_id: parseInt(order_id) },
        data: orderData,
    });
};

//Function to delete a order
const deleteOrder = async (order_id) => {
    return prisma.order.delete({ where: { order_id: parseInt(order_id) } });
};

const addedOrderItem = async (orderItemData,order_id) => {
    const product = await prisma.product.findUnique({ where: { id: parseInt(orderItemData.product_id) } });
    const order = await prisma.order.findUnique({where: { order_id: parseInt(order_id) }})

    await prisma.order.update({
        where: {order_id: parseInt(order_id)},
        data: {total_price: parseFloat(order.total_price) + parseFloat(product.price)* parseInt(orderItemData.quantity)
    }
    })

    return prisma.orderItem.create({
        data: {
            order_id: parseInt(order_id),
            product_id: parseInt(orderItemData.product_id),
            quantity: parseInt(orderItemData.quantity),
            price: parseInt(product.price) * parseInt(orderItemData.quantity)
        }
    });
};

const getOrderTotal = async (order_id) => {
    const order = await prisma.order.findUnique({ where: { order_id: parseInt(order_id) } 
    })

    return order.total_price;
}



//export the functions
module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
    addedOrderItem,
    getOrderTotal
};