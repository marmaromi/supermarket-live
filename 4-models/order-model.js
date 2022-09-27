"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = exports.OrderSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var cart_model_1 = require("./cart-model");
var user_model_1 = require("./user-model");
exports.OrderSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: [true, "Missing user _id"]
    },
    cartId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: [true, "Missing cart _id"],
        unique: true
    },
    finalPrice: {
        type: Number,
        required: [true, "Missing order final price"],
        min: [0, "Price can't be negative"]
    },
    deliveryCity: {
        type: String,
        required: [true, "Missing city"],
        minlength: [2, "City must be at least 2 characters long"],
        maxlength: [50, "City must be 50 characters or less"],
        trim: true,
    },
    deliveryStreet: {
        type: String,
        required: [true, "Missing street"],
        minlength: [2, "Street must be at least 2 characters long"],
        maxlength: [50, "Street must be 50 characters or less"],
        trim: true,
    },
    deliveryDate: {
        type: String,
        required: [true, "Missing delivery date"],
        trim: true
    },
    orderDate: {
        type: String,
        required: [true, "Missing order date"],
        trim: true
    },
    fourLastDigits: {
        type: Number,
        required: [true, "Missing payment details"],
        minlength: [4, "Last 4 digits of payment card are required"],
        maxlength: [4, "Last 4 digits of payment card are required"],
        trim: true
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});
exports.OrderSchema.virtual("user", {
    ref: user_model_1.UserModel,
    localField: "userId",
    foreignField: "_id",
    justOne: true
});
exports.OrderSchema.virtual("cart", {
    ref: cart_model_1.CartModel,
    localField: "cartId",
    foreignField: "_id",
    justOne: true
});
exports.OrderModel = mongoose_1.default.model("OrderModel", exports.OrderSchema, "orders");
