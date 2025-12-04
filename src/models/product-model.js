import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: { type: String, },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    quantity: { type: Number, default: 0,required: true },
});

const productModel = mongoose.model('Product', productSchema);

export default productModel;