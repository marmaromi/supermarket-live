"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_rate_limit_1 = __importDefault(require("express-rate-limit"));
var express_fileupload_1 = __importDefault(require("express-fileupload"));
var cors_1 = __importDefault(require("cors"));
var config_1 = __importDefault(require("./2-utils/config"));
var catch_all_1 = __importDefault(require("./3-middleware/catch-all"));
var error_models_1 = require("./4-models/error-models");
var dal_1 = __importDefault(require("./2-utils/dal"));
var products_controller_1 = __importDefault(require("./6-controllers/products-controller"));
var users_controller_1 = __importDefault(require("./6-controllers/users-controller"));
var carts_controller_1 = __importDefault(require("./6-controllers/carts-controller"));
var orders_controller_1 = __importDefault(require("./6-controllers/orders-controller"));
var sanitize_1 = __importDefault(require("./3-middleware/sanitize"));
var path_1 = __importDefault(require("path"));
var expressServer = (0, express_1.default)();
expressServer.use((0, cors_1.default)({ origin: config_1.default.siteAddress }));
expressServer.use("/api/", (0, express_rate_limit_1.default)({
    windowMs: 100,
    max: 100,
    message: "User exceeded maximum request limit"
}));
expressServer.use(express_1.default.json());
expressServer.use((0, express_fileupload_1.default)());
expressServer.use(sanitize_1.default);
expressServer.use("/api", products_controller_1.default);
expressServer.use("/api", users_controller_1.default);
expressServer.use("/api", carts_controller_1.default);
expressServer.use("/api", orders_controller_1.default);
expressServer.use(express_1.default.static(path_1.default.join(__dirname, "./7-frontend")));
expressServer.use("*", function (req, res, next) {
    if (config_1.default.isProduction) {
        res.sendFile(path_1.default.join(__dirname, "./7-frontend/index.html"));
    }
    else {
        var error = new error_models_1.RouteNotFoundError(req.method, req.originalUrl);
        next(error);
    }
});
expressServer.use(catch_all_1.default);
expressServer.listen(config_1.default.port, function () {
    dal_1.default.connect();
    console.log("Listening on http://localhost:".concat(config_1.default.port));
});
