"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cart_model_1 = require("../4-models/cart-model");
var error_models_1 = require("../4-models/error-models");
var product_in_cart_model_1 = require("../4-models/product-in-cart-model");
var user_model_1 = require("../4-models/user-model");
var products_logic_1 = __importDefault(require("./products-logic"));
function getLatestCartByUser(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var latestCart;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cart_model_1.CartModel.find({ userId: userId }, null, { sort: { creationDate: -1 } }).exec()];
                case 1:
                    latestCart = (_a.sent())[0];
                    if (!latestCart) {
                        throw new error_models_1.ResourceNotFoundError(userId);
                    }
                    return [2 /*return*/, latestCart];
            }
        });
    });
}
function getCartWithItems(cartId) {
    return __awaiter(this, void 0, void 0, function () {
        var cart;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, product_in_cart_model_1.ProductInCartModel.find({ cartId: cartId }).populate("product", "-_id").exec()];
                case 1:
                    cart = _a.sent();
                    return [2 /*return*/, cart];
            }
        });
    });
}
function createCart(userIdString) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, now, cart, errors;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_model_1.UserModel.findById(userIdString).exec()];
                case 1:
                    userId = (_a.sent())._id;
                    if (!userId) {
                        throw new error_models_1.ResourceNotFoundError(userId);
                    }
                    now = new Date().toLocaleString();
                    cart = new cart_model_1.CartModel({ userId: userId, creationDate: now, cartOpen: true });
                    errors = cart.validateSync();
                    if (errors) {
                        throw new error_models_1.ValidationError(errors.message);
                    }
                    return [2 /*return*/, cart.save()];
            }
        });
    });
}
function closeCart(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var cart;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cart_model_1.CartModel.findById(_id)];
                case 1:
                    cart = _a.sent();
                    if (!cart) {
                        throw new error_models_1.ResourceNotFoundError(_id);
                    }
                    cart.cartOpen = false;
                    return [4 /*yield*/, cart_model_1.CartModel.findByIdAndUpdate(_id, cart, { returnOriginal: false })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function deleteCart(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var deletedCart;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cart_model_1.CartModel.findByIdAndDelete(_id)];
                case 1:
                    deletedCart = _a.sent();
                    if (!deletedCart) {
                        throw new error_models_1.ResourceNotFoundError(_id);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function addProduct(productId, cartId, amount) {
    return __awaiter(this, void 0, void 0, function () {
        var productPrice, productInCart, errors;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, products_logic_1.default.getOneProduct(productId)];
                case 1:
                    productPrice = (_a.sent()).productPrice;
                    productInCart = new product_in_cart_model_1.ProductInCartModel({ productId: productId, amount: amount, totalProductPrice: productPrice * amount, cartId: cartId });
                    errors = productInCart.validateSync();
                    if (errors) {
                        throw new error_models_1.ValidationError(errors.message);
                    }
                    return [2 /*return*/, productInCart.save()];
            }
        });
    });
}
function updateProduct(product) {
    return __awaiter(this, void 0, void 0, function () {
        var productPrice, errors, updatedProduct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, products_logic_1.default.getOneProduct(product.productId)];
                case 1:
                    productPrice = (_a.sent()).productPrice;
                    product.totalProductPrice = productPrice * product.amount;
                    errors = product.validateSync();
                    if (errors) {
                        throw new error_models_1.ValidationError(errors.message);
                    }
                    return [4 /*yield*/, product_in_cart_model_1.ProductInCartModel.findByIdAndUpdate(product._id, product, { returnOriginal: false })];
                case 2:
                    updatedProduct = _a.sent();
                    if (!updatedProduct) {
                        throw new error_models_1.ResourceNotFoundError(product._id);
                    }
                    return [2 /*return*/, updatedProduct];
            }
        });
    });
}
function deleteProduct(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var deletedProduct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, product_in_cart_model_1.ProductInCartModel.findByIdAndDelete(_id)];
                case 1:
                    deletedProduct = _a.sent();
                    if (!deletedProduct) {
                        throw new error_models_1.ResourceNotFoundError(_id);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = {
    getLatestCartByUser: getLatestCartByUser,
    getCartWithItems: getCartWithItems,
    createCart: createCart,
    closeCart: closeCart,
    deleteCart: deleteCart,
    addProduct: addProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
};
