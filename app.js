require("dotenv").config();

const express = require("express");
const cors = require("cors");

const maskapaiRoutes = require("./routes/maskapairoutes");
const penerbanganRoutes = require("./routes/penerbanganroutes");

const {
    notFoundHandler,
    errorHandler
} = require("./middlewares/errorhandler");

const app = express();


app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        methods: ["GET", "POST"]
    })
);


app.use(express.json());


app.use("/api/maskapai", maskapaiRoutes);


app.use("/api/penerbangan", penerbanganRoutes);


app.use(notFoundHandler);


app.use(errorHandler);

module.exports = app;