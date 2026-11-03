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

// Middleware CORS
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        methods: ["GET", "POST"]
    })
);

// Membaca request JSON
app.use(express.json());

// Routes Maskapai
app.use("/api/maskapai", maskapaiRoutes);

// Routes Penerbangan
app.use("/api/penerbangan", penerbanganRoutes);

// Route tidak ditemukan
app.use(notFoundHandler);

// Error handler harus didaftarkan paling akhir
app.use(errorHandler);

module.exports = app;