import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;


const productSchema = mongoose.Schema(
    {
      name: { type: String, required: true },
      price: { type: Number, required: true, default: 0 },
      image: { type: String, required: false },
    },
    { timestamps: true }
  );
  
  const Product = mongoose.model("Product", productSchema);
  export default Product;
