const Maskapai = require("../models/maskapaimodel");


const createMaskapai = async (req, res, next) => {
    try {
        const { kode, nama } = req.body || {};

        const maskapai = await Maskapai.create({
            kode,
            nama
        });

        res.status(201).json(maskapai);

    } catch (error) {
        next(error);
    }
};


const getAllMaskapai = async (req, res, next) => {
    try {
        const maskapai = await Maskapai.find().lean();

        res.status(200).json(maskapai);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    createMaskapai,
    getAllMaskapai
};