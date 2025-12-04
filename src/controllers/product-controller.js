import productModel from '../models/product-model.js';

const controller = {

  deleteOne: async function (req, res) {
    const result = await productModel.deleteOne({ _id: req.params.id });
    res.status(200).json(result);
  },

  getOne: async function (req, res) {
    const result = await productModel.findById(req.params.id);
    res.status(200).json(result);
  },

  updateOne: async function (req, res) {
    const result = await productModel.updateOne(
      { _id: req.params.id },
      req.body
    );

    res.status(200).json(result);
  },

  getAll: async function (req, res) {
    const result = await productModel.find();
    res.status(200).json(result);
  },

  create: async function (req, res) {
    const result = await productModel.create(req.body);
    res.status(201).json(result);
  }
};

export default controller;
