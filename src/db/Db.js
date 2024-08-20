import mongoose from "mongoose"
import dotenv from "dotenv"; // Import dotenv
dotenv.config({
    path:'.env' //give .env file location
});
const connectDB = async () => {
    try {
        console.log();
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`mongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("mongooDB connection error..");
        process.exit(1)
    }
}
export default connectDB;