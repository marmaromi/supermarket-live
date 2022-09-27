"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = exports.ProductSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var category_model_1 = require("./category-model");
exports.ProductSchema = new mongoose_1.default.Schema({
    productName: {
        type: String,
        required: [true, "Missing product name"],
        minlength: [2, "Product name too short"],
        maxlength: [100, "Product name too long"],
        trim: true,
        unique: true
    },
    categoryId: {
        type: mongoose_1.default.Schema.Types.ObjectId
    },
    productPrice: {
        type: Number,
        required: [true, "Missing product price"],
        min: [0, "Product price can't be negative"],
        max: [10000, "Product price can't exceed 10,000₪"]
    },
    imageName: {
        type: String
    },
    image: {
    // type: Buffer, // **************************** probably won't work ***********************************
    // required: [true, "Missing product image"]
    },
    priceParameter: {
        type: String,
        required: [true, "Missing product price parameter (יחידה/קילוגרם)"],
        match: [
            /^יחידה$|^קילוגרם$/,
            "enter יחידה or קילוגרם",
        ]
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});
exports.ProductSchema.virtual("category", {
    ref: category_model_1.CategoryModel,
    localField: "categoryId",
    foreignField: "_id",
    justOne: true
});
exports.ProductModel = mongoose_1.default.model("ProductModel", exports.ProductSchema, "products");
