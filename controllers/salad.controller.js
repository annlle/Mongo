const {Salad} = require('../model/index');

module.exports.createSalad = async (req, res, next) => {
    try {
        const {body} = req;
        const salad = await Salad.create(body);
        res.status(201).send(salad);
    } catch (error) {
        next(error);
    }
};

module.exports.getSalad = async (req, res, next) => {
    try {
        const{params:{saladId}} = req;
        const result = await findById(saladId);
        return res.status(200).send(result);
    } catch (error) {
        next(error);
    }
};

module.exports.getAllSalads = async (req, res, next) => {
    try {
        const finded = await Salad.find({});
        return res.status(200).send(finded); 
    } catch (error) {
        next(error);
    }
};

module.exports.updateSalad = async (req,res,next) => {
    try {
        const {params:{saladId}, body} = req;
        const updatedSalad = await Salad.findByIdAndUpdate(saladId, body);
        return res.status(200).send(updatedSalad);  
    } catch (error) {
        next(error);
    }

};

module.exports.deleteSalad = async (req, res, next) => {
    try {
    const {saladId} = req;
    const deletedSalad = Salad.findByIdAndDelete(saladId);
    return res.status(200).send(deletedSalad); 
    } catch (error) {
        next(error);
    }
};