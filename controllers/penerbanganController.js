const Penerbangan = require("../models/penerbanganmodel");


const createPenerbangan = async (req, res, next) => {
    try {
        const {
            kodePenerbangan,
            tanggalPenerbangan,
            jamBerangkat,
            jamTiba,
            hargaTiket,
            status,
            rute,
            maskapai
        } = req.body || {};

        
        const penerbangan = await Penerbangan.create({
            kodePenerbangan,
            tanggalPenerbangan,
            jamBerangkat,
            jamTiba,
            hargaTiket,
            status,
            rute,
            maskapai
        });

        res.status(201).json(penerbangan);

    } catch (error) {
        next(error);
    }
};


const getAllPenerbangan = async (req, res, next) => {
    try {
        const filter = {};


        if (
            Object.prototype.hasOwnProperty.call(
                req.query,
                "status"
            )
        ) {
            filter.status = req.query.status;
        }


        const penerbangan = await Penerbangan.find(filter)
            .select(
                "_id kodePenerbangan jamBerangkat hargaTiket status"
            )
            .sort({ createdAt: -1 })
            .lean();

        res.status(200).json(penerbangan);

    } catch (error) {
        next(error);
    }
};


const getPenerbanganById = async (req, res, next) => {
    try {
        const { id } = req.params;

        
        if (!/^[0-9a-fA-F]{24}$/.test(id)) {
            const error = new Error(
                "ID penerbangan tidak valid"
            );

            error.status = 400;

            throw error;
        }

        const penerbangan = await Penerbangan.findById(id)
            .populate({
                path: "maskapai",
                select: "kode nama"
            });

        
        if (!penerbangan) {
            const error = new Error(
                "Data penerbangan tidak ditemukan"
            );

            error.status = 404;

            throw error;
        }

        res.status(200).json(penerbangan);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    createPenerbangan,
    getAllPenerbangan,
    getPenerbanganById
};