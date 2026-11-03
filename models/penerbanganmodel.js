const mongoose = require("mongoose");


const ruteSchema = new mongoose.Schema(
    {
        kotaAsal: {
            type: String,
            required: [true, "Kota asal wajib diisi"],
            trim: true
        },

        kotaTujuan: {
            type: String,
            required: [true, "Kota tujuan wajib diisi"],
            trim: true
        }
    },
    {
        _id: false
    }
);


const penerbanganSchema = new mongoose.Schema(
    {
        kodePenerbangan: {
            type: String,
            required: [true, "Kode penerbangan wajib diisi"],
            unique: true,
            trim: true
        },

        tanggalPenerbangan: {
            type: Date,
            required: [true, "Tanggal penerbangan wajib diisi"]
        },

        jamBerangkat: {
            type: String,
            required: [true, "Jam berangkat wajib diisi"],
            trim: true
        },

        jamTiba: {
            type: String,
            required: [true, "Jam tiba wajib diisi"],
            trim: true
        },

        hargaTiket: {
            type: Number,
            required: [true, "Harga tiket wajib diisi"],
            min: [0, "Harga tiket tidak boleh negatif"]
        },

        status: {
            type: String,
            required: [true, "Status penerbangan wajib diisi"],
            trim: true
        },

        
        rute: {
            type: ruteSchema,
            required: [true, "Informasi rute wajib diisi"]
        },

        
        maskapai: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Maskapai",
            required: [true, "Maskapai wajib dipilih"]
        },

        
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        versionKey: false
    }
);

const Penerbangan = mongoose.model(
    "Penerbangan",
    penerbanganSchema
);

module.exports = Penerbangan;