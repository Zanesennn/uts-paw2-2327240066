const mongoose = require("mongoose");

const maskapaiSchema = new mongoose.Schema(
    {
        kode: {
            type: String,
            required: [true, "Kode maskapai wajib diisi"],
            unique: true,
            trim: true,
            uppercase: true
        },

        nama: {
            type: String,
            required: [true, "Nama maskapai wajib diisi"],
            trim: true
        }
    },
    {
        versionKey: false
    }
);

const Maskapai = mongoose.model(
    "Maskapai",
    maskapaiSchema
);

module.exports = Maskapai;