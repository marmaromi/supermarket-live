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
var error_models_1 = require("../4-models/error-models");
var product_model_1 = require("../4-models/product-model");
var uuid_1 = require("uuid");
var fs_1 = __importDefault(require("fs"));
var config_1 = __importDefault(require("../2-utils/config"));
function getAllProducts() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, product_model_1.ProductModel.find().populate("category", "-_id").exec()];
        });
    });
}
function getOneProduct(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var product;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, product_model_1.ProductModel.findById(_id).populate("category", "-_id").exec()];
                case 1:
                    product = _a.sent();
                    if (!product) {
                        throw new error_models_1.ResourceNotFoundError(_id);
                    }
                    return [2 /*return*/, product];
            }
        });
    });
}
function addProduct(product) {
    return __awaiter(this, void 0, void 0, function () {
        var errors, dotIndex, extension;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    errors = product.validateSync();
                    if (errors) {
                        throw new error_models_1.ValidationError(errors.message);
                    }
                    if (!product.image) return [3 /*break*/, 2];
                    dotIndex = product.image.name.lastIndexOf(".");
                    extension = product.image.name.substring(dotIndex);
                    product.imageName = (0, uuid_1.v4)() + extension;
                    return [4 /*yield*/, product.image.mv(config_1.default.imagesPath + product.imageName)];
                case 1:
                    _a.sent();
                    delete product.image;
                    _a.label = 2;
                case 2: 
                // product.categoryId = await ProductModel.findById(product.).select("category").exec();
                return [2 /*return*/, product.save()];
            }
        });
    });
}
function updateProduct(product) {
    return __awaiter(this, void 0, void 0, function () {
        var errors, imageToDelete_1, dotIndex, extension, updatedProduct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    errors = product.validateSync();
                    if (errors) {
                        throw new error_models_1.ValidationError(errors.message);
                    }
                    if (!product.image) return [3 /*break*/, 2];
                    imageToDelete_1 = config_1.default.imagesPath + product.imageName;
                    fs_1.default.unlink(imageToDelete_1, function (err) {
                        if (err) {
                            console.log("Image to delete not found in path: \"".concat(imageToDelete_1, "\""));
                        }
                        else
                            console.log("File was deleted in path: \"".concat(imageToDelete_1, "\""));
                    });
                    dotIndex = product.image.name.lastIndexOf(".");
                    extension = product.image.name.substring(dotIndex);
                    product.imageName = (0, uuid_1.v4)() + extension;
                    return [4 /*yield*/, product.image.mv(config_1.default.imagesPath + product.imageName)];
                case 1:
                    _a.sent();
                    delete product.image;
                    _a.label = 2;
                case 2: return [4 /*yield*/, product_model_1.ProductModel.findByIdAndUpdate(product._id, product, { returnOriginal: false })];
                case 3:
                    updatedProduct = _a.sent();
                    if (!updatedProduct) {
                        throw new error_models_1.ResourceNotFoundError(product._id);
                    }
                    return [2 /*return*/, updatedProduct];
            }
        });
    });
}
function getProductsCount() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, product_model_1.ProductModel.count().exec()];
        });
    });
}
exports.default = {
    getAllProducts: getAllProducts,
    getOneProduct: getOneProduct,
    addProduct: addProduct,
    updateProduct: updateProduct,
    getProductsCount: getProductsCount
};
