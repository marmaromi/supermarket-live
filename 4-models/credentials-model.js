"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialsModel = exports.CredentialsSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
exports.CredentialsSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "Missing email"],
        lowercase: true
    },
    citizenId: {
        type: Number,
    },
    password: {
        type: String,
        required: [true, "Missing password"]
    },
    city: {
        type: String,
    },
    street: {
        type: String,
    },
    role: {
        type: String,
    }
}, {
    versionKey: false,
});
exports.CredentialsModel = mongoose_1.default.model("CredentialsModel", exports.CredentialsSchema, "users");
