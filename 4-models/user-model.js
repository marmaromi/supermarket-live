"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var israeli_id_validator_1 = __importDefault(require("israeli-id-validator"));
exports.UserSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        required: [true, "Missing first name"],
        minlength: [2, "First name must be at least 2 characters long"],
        maxlength: [30, "First name must be 30 characters or less"],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, "Missing last name"],
        minlength: [2, "Last name must be at least 2 characters long"],
        maxlength: [30, "Last name must be 30 characters or less"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Missing email"],
        trim: true,
        unique: true,
        lowercase: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Invalid email address",
        ]
    },
    citizenId: {
        type: Number,
        required: [true, "Missing citizen id"],
        trim: true,
        unique: true,
        validate: [israeli_id_validator_1.default, "Invalid citizen id"],
    },
    password: {
        type: String,
        required: [true, "Missing password"],
        minlength: [8, "Password must be at least 8 characters long"],
        maxlength: [128, "Password must be 128 characters or less"]
    },
    city: {
        type: String,
        required: [true, "Missing city"],
        minlength: [2, "City must be at least 2 characters long"],
        maxlength: [50, "City must be 50 characters or less"],
        trim: true,
    },
    street: {
        type: String,
        required: [true, "Missing street"],
        minlength: [2, "Street must be at least 2 characters long"],
        maxlength: [50, "Street must be 50 characters or less"],
        trim: true,
    },
    role: {
        type: String,
    }
}, {
    versionKey: false,
});
exports.UserModel = mongoose_1.default.model("UserModel", exports.UserSchema, "users");
