require("dotenv").config();

const mongoose = require("mongoose");
const app = require("./app");


const requiredEnv = [
    "PORT",
    "MONGODB_URI",
    "CORS_ORIGIN"
];

const missingEnv = requiredEnv.filter(
    (key) => !process.env[key]
);

if (missingEnv.length > 0) {
    console.error(
        `Konfigurasi belum tersedia: ${missingEnv.join(", ")}`
    );
    process.exit(1);
}


async function startServer() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB berhasil terhubung!");

        const server = app.listen(process.env.PORT, () => {
            console.log(
                `Server berjalan di http://localhost:${process.env.PORT}`
            );
        });

        server.on("error", (error) => {
            console.error("Gagal menjalankan server:", error.message);
            process.exit(1);
        });

    } catch (error) {
        console.error(
            "Gagal menghubungkan MongoDB:",
            error.message
        );

        process.exit(1);
    }
}

startServer();