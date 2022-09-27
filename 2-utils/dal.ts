import mongoose from "mongoose";
import config from "./config";

async function connect(): Promise<void> {
    try {
        const db = await mongoose.connect(config.connectionString);
        console.log("We're connected to MongoDB, database: " + db.connection.name);
    }
    catch (err: any) {
        console.error(err);
    }
}
export default {
    connect
};