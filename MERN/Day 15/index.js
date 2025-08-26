const http = require('http');
const url = require("url");


const data = [
    {
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",

    },
    {
        title: "Eyeshadow Palette with Mirror",
        description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        category: "beauty",
    },
    {
        title: "Powder Canister",
        description: "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
        category: "beauty",
    }
]

const orders = [
    {
        id: 1,
        customerName: "John Doe",
        product: "Laptop",
        quantity: 2,
        price: 75000,
        status: "Shipped",
        orderDate: "2025-08-01"
    },
    {
        id: 2,
        customerName: "Jane Smith",
        product: "Smartphone",
        quantity: 1,
        price: 45000,
        status: "Delivered",
        orderDate: "2025-08-02"
    },
    {
        id: 3,
        customerName: "Ravi Kumar",
        product: "Headphones",
        quantity: 3,
        price: 1500,
        status: "Processing",
        orderDate: "2025-08-03"
    },
    {
        id: 4,
        customerName: "Aisha Khan",
        product: "Tablet",
        quantity: 1,
        price: 22000,
        status: "Cancelled",
        orderDate: "2025-08-04"
    }
];



const server = http.createServer(
    (req, res) => {
        const urlParser = url.parse(req.url, true)
        if (urlParser.pathname === "/product") {
            res.end(JSON.stringify(data))
        } else if (urlParser.pathname === "/orders") {
            res.end(JSON.stringify(orders))
        }

    }
)


server.listen(
    5000,
    () => {
        console.log("Server started")
    }
)