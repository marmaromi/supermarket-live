"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
if (!process.env.NODE_ENV)
    process.env.NODE_ENV = "development";
var Config = /** @class */ (function () {
    function Config() {
        this.isDevelopment = process.env.NODE_ENV === "development";
        this.isProduction = process.env.NODE_ENV === "production";
        this.port = 0;
        this.connectionString = "";
        this.imagesPath = "";
        this.siteAddress = "";
    }
    return Config;
}());
var DevelopmentConfig = /** @class */ (function (_super) {
    __extends(DevelopmentConfig, _super);
    function DevelopmentConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.port = 3001;
        _this.connectionString = "mongodb://127.0.0.1:27017/Supermarket";
        _this.imagesPath = "./src/1-assets/images/";
        _this.siteAddress = "http://localhost:4200";
        return _this;
    }
    return DevelopmentConfig;
}(Config));
var ProductionConfig = /** @class */ (function (_super) {
    __extends(ProductionConfig, _super);
    function ProductionConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.port = +process.env.PORT;
        _this.connectionString = "mongodb+srv://marmaromi:SCzdf3gUCo1mQ6zA@supermarket.rbsmpgg.mongodb.net/Supermarket";
        _this.imagesPath = "./1-assets/images/";
        _this.siteAddress = "https://supermarket-zol.web.app" || "https://supermarket-zol.firebaseapp.com";
        return _this;
    }
    return ProductionConfig;
}(Config));
var config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();
exports.default = config;
