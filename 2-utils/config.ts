if(!process.env.NODE_ENV) process.env.NODE_ENV = "development";

class Config {
    public isDevelopment = process.env.NODE_ENV === "development";
    public isProduction = process.env.NODE_ENV === "production";
    public port = 0;
    public connectionString = "";
    public imagesPath = "";
    public siteAddress = "";

}

class DevelopmentConfig extends Config {
    public port = 3001;
    public connectionString = "mongodb://127.0.0.1:27017/Supermarket";
    public imagesPath = "./src/1-assets/images/";
    public siteAddress = "http://localhost:4200";

}

class ProductionConfig extends Config {
    public port = +process.env.PORT;
    public connectionString = "mongodb+srv://marmaromi:SCzdf3gUCo1mQ6zA@supermarket.rbsmpgg.mongodb.net/Supermarket";
    public imagesPath = "./1-assets/images/";
    public siteAddress = "https://supermarket-zol.web.app" || "https://supermarket-zol.firebaseapp.com";

}

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;
