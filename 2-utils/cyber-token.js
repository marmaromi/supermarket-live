"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var error_models_1 = require("../4-models/error-models");
var secret = 'it is mostly food';
var getNewToken = function (user) {
    var payload = { user: user };
    var token = jsonwebtoken_1.default.sign(payload, secret);
    return token;
};
var verifyToken = function (req) {
    return new Promise(function (resolve, reject) {
        var header = req.headers.authorization;
        if (!header) {
            reject(new error_models_1.UnauthorizedError("No token sent"));
            return;
        }
        var token = header.substring(7);
        if (!token) {
            reject(new error_models_1.UnauthorizedError("No token sent"));
            return;
        }
        jsonwebtoken_1.default.verify(token, secret, function (error, payload) {
            if (error) {
                reject(new error_models_1.UnauthorizedError("Invalid or expired token"));
                return;
            }
            resolve(true);
        });
    });
};
var getTokenRole = function (request) {
    var header = request.headers.authorization;
    var token = header.substring(7);
    var payload = jsonwebtoken_1.default.decode(token);
    var user = payload.user;
    // console.log(header);
    return user.role;
};
exports.default = {
    getNewToken: getNewToken,
    verifyToken: verifyToken,
    getTokenRole: getTokenRole
};
