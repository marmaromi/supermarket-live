"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModel = exports.CartSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
exports.CartSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: [true, "Missing customer _id"]
    },
    creationDate: {
        type: String,
        required: [true, "Missing cart creation date"]
    },
    cartOpen: {
        type: Boolean
    }
}, {
    versionKey: false,
    // toJSON: {virtuals: true},
    // id: false
});
// CartSchema.virtual("product-in-cart",{
//     ref: ProductInCartModel,
//     localField: "_id",
//     foreignField: "cartId",
//     justOne: true
// });
exports.CartModel = mongoose_1.default.model("CartModel", exports.CartSchema, "carts");
