const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Tên sản phẩm, bắt buộc
  img: { type: String, required: true }, // Tên file ảnh, bắt buộc
  price: { type: Number, required: true }, // Giá sản phẩm, bắt buộc
  desc: { type: String }, // Mô tả sản phẩm
  gender: { type: String, enum: ['MEN', 'WOMEN', 'KIDS'], required: true } // Giới tính, bắt buộc với enum
});

// Xuất model Product dựa trên schema
module.exports = mongoose.model('Product', productSchema);
