const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const messageRoute = require("./routes/message")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")
const cors = require("cors")

dotenv.config()

mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECT_URL)
    .then(() => console.log("DB Connection Successfull !"))
    .catch((err) => {
        console.log(err);
    })

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/contact-messages", messageRoute);

app.listen(process.env.PORT || 5555, () => {
    console.log("Backend server is running !");
});