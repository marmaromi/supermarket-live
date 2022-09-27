"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductInCartModel = exports.ProductInCartSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var product_model_1 = require("./product-model");
exports.ProductInCartSchema = new mongoose_1.default.Schema({
    productId: {
        type: String,
        required: [true, "Missing product _id in cart"],
    },
    amount: {
        type: Number,
        required: [true, "Missing product amount in cart"],
        min: [0, "Amount can't be negative"]
    },
    totalProductPrice: {
        type: Number,
        required: [true, "Missing product total price in cart"],
        min: [0, "Price can't be negative"]
    },
    cartId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: [true, "Missing cart _id"],
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});
exports.ProductInCartSchema.virtual("product", {
    ref: product_model_1.ProductModel,
    localField: "productId",
    foreignField: "_id",
    justOne: true
});
exports.ProductInCartModel = mongoose_1.default.model("ProductInCartModel", exports.ProductInCartSchema, "products-in-cart");
